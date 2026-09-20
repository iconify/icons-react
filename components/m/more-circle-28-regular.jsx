import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wfn5ws_sj {
  fill: currentColor;
  d: path("M9.5 14a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12s12-5.373 12-12S20.627 2 14 2M3.5 14C3.5 8.201 8.201 3.5 14 3.5S24.5 8.201 24.5 14S19.799 24.5 14 24.5S3.5 19.799 3.5 14");
}
</style><path class="wfn5ws_sj"/>`,
		"fallback": "fluent:more-circle-28-regular",
	});
}

export default Component;
