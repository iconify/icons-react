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
		"content": `<style>.fnv8ydb1i {
  fill: currentColor;
  d: path("M12.943 4.165a2.25 2.25 0 0 1 2.118 0l8.249 4.4q.26.139.469.334l-9.78 5.008L4.225 8.9q.21-.196.471-.335zm-9.416 6.064l10.13 5.189c.216.11.47.11.685 0l10.135-5.192q.023.16.023.324v8.7a2.25 2.25 0 0 1-2.25 2.25H5.755a2.25 2.25 0 0 1-2.25-2.25v-8.7q0-.163.023-.322m12.24-7.388a3.75 3.75 0 0 0-3.53 0L3.99 7.24a3.75 3.75 0 0 0-1.985 3.309v8.7A3.75 3.75 0 0 0 5.754 23H22.25A3.75 3.75 0 0 0 26 19.25v-8.7a3.75 3.75 0 0 0-1.985-3.309z");
}
</style><path class="fnv8ydb1i"/>`,
		"fallback": "fluent:mail-read-28-regular",
	});
}

export default Component;
