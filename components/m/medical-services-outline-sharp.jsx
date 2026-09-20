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
		"content": `<style>.bhy2_fbsm {
  fill: currentColor;
  d: path("M2 22V6h6V2h8v4h6v16zm2-2h16V8H4zm6-14h4V4h-4zM4 20V8zm7-5v3h2v-3h3v-2h-3v-3h-2v3H8v2z");
}
</style><path class="bhy2_fbsm"/>`,
		"fallback": "material-symbols:medical-services-outline-sharp",
	});
}

export default Component;
