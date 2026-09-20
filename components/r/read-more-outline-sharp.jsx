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
		"content": `<style>.y95fidb2e {
  fill: currentColor;
  d: path("m7.45 16.739l-.689-.689l3.506-3.55H3v-1h7.267L6.762 7.95l.688-.689L12.189 12zm5.473-.47v-1H21v1zm0-7.538v-1H21v1zm3 3.769v-1H21v1z");
}
</style><path class="y95fidb2e"/>`,
		"fallback": "material-symbols-light:read-more-outline-sharp",
	});
}

export default Component;
