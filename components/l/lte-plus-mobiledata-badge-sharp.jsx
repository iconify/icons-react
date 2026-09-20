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
		"content": `<style>.d25b_nquv {
  fill: currentColor;
  d: path("M4 16h4v-2H6V8H4zm5.5 0h2v-6H13V8H8v2h1.5zm4.5 0h4v-2h-2v-1h1.5v-2H16v-1h2V8h-4zM1 21V3h22v8.25h-1.25V10h-1.5v1.25H19v1.5h1.25V14h1.5v-1.25H23V21z");
}
</style><path class="d25b_nquv"/>`,
		"fallback": "material-symbols:lte-plus-mobiledata-badge-sharp",
	});
}

export default Component;
