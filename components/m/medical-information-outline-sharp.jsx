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
		"content": `<style>.sit7cybqp {
  fill: currentColor;
  d: path("M7.692 17.5h1v-2h2v-1h-2v-2h-1v2h-2v1h2zM13 14.308h5.5v-.885H13zm0 2.384h3.5v-.884H13zM3 21V8h7V3h4v5h7v13zm1-1h16V9h-6v1.77h-4V9H4zm7-10.23h2V4h-2zm1 4.73");
}
</style><path class="sit7cybqp"/>`,
		"fallback": "material-symbols-light:medical-information-outline-sharp",
	});
}

export default Component;
