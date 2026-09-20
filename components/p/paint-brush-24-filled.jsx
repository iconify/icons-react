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
		"content": `<style>.iku63s8ok {
  fill: currentColor;
  d: path("M12.5 2v3.252a.75.75 0 0 0 1.5 0V2h1v4.251a.75.75 0 0 0 1.5 0V2h1.75a.75.75 0 0 1 .75.75V11H5V2.75A.75.75 0 0 1 5.75 2zM5 12.5v1.752a2.25 2.25 0 0 0 2.25 2.25H10V20a2 2 0 1 0 4 0v-3.498h2.75a2.25 2.25 0 0 0 2.25-2.25V12.5z");
}
</style><path class="iku63s8ok"/>`,
		"fallback": "fluent:paint-brush-24-filled",
	});
}

export default Component;
