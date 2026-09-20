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
		"content": `<style>.p6j_kp4gz {
  fill: currentColor;
  d: path("M6.385 21h6.807v-4.384H6.385zm7.807 0H21v-4.384h-6.808zM3 17.23V3h14.23v1H4v13.23zm3.385-1.614h6.807v-4.424H6.385zm7.807 0H21v-4.424h-6.808zm-7.807-5.424H21V6.385H6.385z");
}
</style><path class="p6j_kp4gz"/>`,
		"fallback": "material-symbols-light:table-view-sharp",
	});
}

export default Component;
