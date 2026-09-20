import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.aul895bcq {
  fill: currentColor;
  d: path("M153.76 28.41a4 4 0 0 0-4.22.43L78.63 84H32a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h46.63l70.91 55.16a4.07 4.07 0 0 0 2.46.84a3.9 3.9 0 0 0 1.76-.41A4 4 0 0 0 156 224V32a4 4 0 0 0-2.24-3.59M28 160V96a4 4 0 0 1 4-4h44v72H32a4 4 0 0 1-4-4m120 55.82L84 166V90l64-49.78Z");
}
</style><path class="aul895bcq"/>`,
		"fallback": "ph:speaker-none-thin",
	});
}

export default Component;
