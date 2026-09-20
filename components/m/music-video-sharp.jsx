import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qgm_dzbvg {
  fill: currentColor;
  d: path("M12.294 15.972q.59-.585.59-1.433V9H15.5V7.462h-3.384v5.5q-.249-.206-.568-.324t-.682-.119q-.849 0-1.434.59q-.586.591-.586 1.43t.59 1.428q.591.59 1.43.59q.838 0 1.428-.585M3 19V5h18v14z");
}
</style><path class="qgm_dzbvg"/>`,
		"fallback": "material-symbols-light:music-video-sharp",
	});
}

export default Component;
