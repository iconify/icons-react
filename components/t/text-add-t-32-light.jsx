import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v-j45gxqq {
  fill: currentColor;
  d: path("M23 15.5a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15M23.5 4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V5h-8.5v15.04A9 9 0 0 0 14 23c0 1.037.177 2.032.5 2.959V27h.438q.258.52.579 1H10.5a.5.5 0 0 1 0-1h3V5H5v3.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5zm-.25 13.5a.75.75 0 0 0-.75.75V22h-3.75a.75.75 0 0 0 0 1.5h3.75v3.75a.75.75 0 0 0 1.5 0V23.5h3.75a.75.75 0 0 0 0-1.5H24v-3.75a.75.75 0 0 0-.75-.75");
}
</style><path class="v-j45gxqq"/>`,
		"fallback": "fluent:text-add-t-32-light",
	});
}

export default Component;
