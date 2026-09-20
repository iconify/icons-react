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
		"content": `<style>.f8egy6b5z {
  fill: currentColor;
  d: path("M15.083 6.283A1.75 1.75 0 0 1 15.168 5H6.25l-.184.005A3.25 3.25 0 0 0 3 8.25v11.5l.005.184A3.25 3.25 0 0 0 6.25 23h15.5l.184-.005A3.25 3.25 0 0 0 25 19.75V10.5h-3.973L14 14.155L4.5 9.214V8.25l.006-.144A1.75 1.75 0 0 1 6.25 6.5h8.919a2 2 0 0 1-.086-.217m-.737 9.382l9.154-4.76v8.845l-.006.143A1.75 1.75 0 0 1 21.75 21.5H6.25l-.144-.006A1.75 1.75 0 0 1 4.5 19.75v-8.845l9.154 4.76l.111.047c.19.063.4.047.581-.047M16 2.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75M16.75 5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM16 8.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75");
}
</style><path class="f8egy6b5z"/>`,
		"fallback": "fluent:mail-list-28-regular",
	});
}

export default Component;
