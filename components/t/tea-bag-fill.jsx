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
		"content": `<style>.v7crv7brw {
  fill: currentColor;
  d: path("M112 136V72h19.47a16.09 16.09 0 0 1 13.72 7.77L165.72 114a16.06 16.06 0 0 1 2.28 8.24V216a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16v-93.78a16.06 16.06 0 0 1 2.28-8.22l20.53-34.23A16.09 16.09 0 0 1 76.53 72H96v64a8 8 0 0 0 16 0m112 24a16 16 0 0 1-16-16V64a56 56 0 0 0-112 0v8h16v-8a40 40 0 0 1 80 0v80a32 32 0 0 0 32 32a8 8 0 0 0 0-16");
}
</style><path class="v7crv7brw"/>`,
		"fallback": "ph:tea-bag-fill",
	});
}

export default Component;
