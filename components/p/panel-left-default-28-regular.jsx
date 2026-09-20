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
		"content": `<style>.zfs5gibfs {
  fill: currentColor;
  d: path("M22.251 4a3.75 3.75 0 0 1 3.75 3.75v12.5a3.75 3.75 0 0 1-3.75 3.75H5.754a3.75 3.75 0 0 1-3.75-3.75V7.75A3.75 3.75 0 0 1 5.754 4zM5.754 5.5a2.25 2.25 0 0 0-2.25 2.25v12.5a2.25 2.25 0 0 0 2.25 2.25H9.5v-17zM11 5.5v17h11.251a2.25 2.25 0 0 0 2.25-2.25V7.75a2.25 2.25 0 0 0-2.25-2.25z");
}
</style><path class="zfs5gibfs"/>`,
		"fallback": "fluent:panel-left-default-28-regular",
	});
}

export default Component;
