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
		"content": `<style>.wtl97gbmm {
  fill: currentColor;
  d: path("m12 6.586l3.293-3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414L17.414 12ZM3 16c0-.265.105-.52.293-.707L10.586 8L16 13.414L10.414 19H20a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1Z");
}
</style><path class="wtl97gbmm"/>`,
		"fallback": "coolicons:pencil-line-fill-sharp",
	});
}

export default Component;
