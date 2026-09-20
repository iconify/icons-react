import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jg6kf_ofs {
  fill: currentColor;
  d: path("m225.56 87.56l-87.92-68.31l-.18-.14a15.93 15.93 0 0 0-18.92 0l-.18.14l-87.92 68.31a16 16 0 0 0-5.7 17.63l32 107.54l.06.17A15.94 15.94 0 0 0 72 224h112a15.94 15.94 0 0 0 15.23-11.1l.06-.17l32-107.54a16 16 0 0 0-5.73-17.63m-9.62 13L184 208H72L40 100.56l-.06-.17l.18-.14L128 32l87.82 68.23l.18.14Z");
}
</style><path class="jg6kf_ofs"/>`,
		"fallback": "ph:pentagon",
	});
}

export default Component;
