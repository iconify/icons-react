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
		"content": `<style>.lcpsegb9h {
  fill: currentColor;
  d: path("M12.275 16.275Q13 15.55 13 14.5V9h3V7h-4v5.5q-.325-.225-.7-.363T10.5 12q-1.05 0-1.775.725T8 14.5t.725 1.775T10.5 17t1.775-.725M2 20V4h20v16z");
}
</style><path class="lcpsegb9h"/>`,
		"fallback": "material-symbols:music-video-sharp",
	});
}

export default Component;
