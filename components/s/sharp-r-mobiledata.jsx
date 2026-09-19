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
		"content": `<style>.gbsgqotvf {
  fill: currentColor;
  d: path("M7.8 7.2L9 10H7L5.87 7.33H4V10H2V2h7v5.2zM7 4H4v1.33h3z");
}
</style><path class="gbsgqotvf"/>`,
		"fallback": "ic:sharp-r-mobiledata",
	});
}

export default Component;
