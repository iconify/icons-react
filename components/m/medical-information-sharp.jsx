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
		"content": `<style>.os4jouunj {
  fill: currentColor;
  d: path("M7.692 17.5h1v-2h2v-1h-2v-2h-1v2h-2v1h2zM13 14.308h5.5v-.885H13zm0 2.384h3.5v-.884H13zM3 21V8h7V3h4v5h7v13zm8-11.23h2V4h-2z");
}
</style><path class="os4jouunj"/>`,
		"fallback": "material-symbols-light:medical-information-sharp",
	});
}

export default Component;
