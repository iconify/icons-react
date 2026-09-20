import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i-qw-8ufy {
  fill: currentColor;
  d: path("M16 12.5V6.373L9.254 9.931a.5.5 0 0 1-.507 0L2 6.373V12.5A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5m-.015-7.277A2.5 2.5 0 0 0 13.5 3h-9a2.5 2.5 0 0 0-2.485 2.223L9 8.92zM6.5 17a2.5 2.5 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-7c.607.456 1 1.182 1 2v5a4.5 4.5 0 0 1-4.5 4.5z");
}
</style><path class="i-qw-8ufy"/>`,
		"fallback": "fluent:mail-multiple-20-filled",
	});
}

export default Component;
