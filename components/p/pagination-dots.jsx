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
		"content": `<style>.gyubb6ncb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.5 9.75h4q2.25 0 2.25 2.25T8.5 14.25h-4q-2.25 0-2.25-2.25q0-.932.659-1.591T4.5 9.75M14 10q-2 0-2 2t2 2t2-2t-2-2m3.5 2q0-2 2-2t2 2t-2 2t-2-2");
}
</style><path class="gyubb6ncb"/>`,
		"fallback": "uix-solid:pagination-dots",
	});
}

export default Component;
