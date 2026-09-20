import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i2eg2f-ww {
  fill: currentColor;
  d: path("M12.25 8A4.25 4.25 0 0 0 8 12.25v15.5A4.25 4.25 0 0 0 12.25 32h23.5A4.25 4.25 0 0 0 40 27.75v-15.5A4.25 4.25 0 0 0 35.75 8zm-1.75 4.25c0-.966.784-1.75 1.75-1.75h23.5c.967 0 1.75.784 1.75 1.75v15.5a1.75 1.75 0 0 1-1.75 1.75h-23.5a1.75 1.75 0 0 1-1.75-1.75zM5.25 35.5a1.25 1.25 0 1 0 0 2.5h37.5a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="i2eg2f-ww"/>`,
		"fallback": "fluent:laptop-48-regular",
	});
}

export default Component;
