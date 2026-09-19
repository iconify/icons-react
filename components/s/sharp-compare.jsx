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
		"content": `<style>.sfgvg5b2w {
  fill: currentColor;
  d: path("M10 3H3v18h7v2h2V1h-2zm0 15H5l5-6zM21 3h-7v2h5v13l-5-6v9h7z");
}
</style><path class="sfgvg5b2w"/>`,
		"fallback": "ic:sharp-compare",
	});
}

export default Component;
