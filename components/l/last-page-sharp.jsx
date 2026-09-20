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
		"content": `<style>.cwl7tbl8r {
  fill: currentColor;
  d: path("m7 17.308l-.708-.708l4.6-4.6l-4.6-4.6L7 6.692L12.308 12zm9.5.192v-11h1v11z");
}
</style><path class="cwl7tbl8r"/>`,
		"fallback": "material-symbols-light:last-page-sharp",
	});
}

export default Component;
