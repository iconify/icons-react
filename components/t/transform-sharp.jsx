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
		"content": `<style>.phywi73sh {
  fill: currentColor;
  d: path("m15.692 21.923l-3.307-3.307l.707-.72l2.1 2.062v-3.785H9.423q-.69 0-1.153-.462t-.462-1.153v-5.77H3v-1h4.808V4.043l-2.1 2.062L5 5.384l3.308-3.307l3.308 3.308l-.708.719l-2.1-2.062v10.516q0 .23.192.423t.423.192H21v1h-4.808v3.785l2.1-2.062l.708.72zm-.5-8.75v-3.77q0-.23-.192-.422t-.423-.192h-3.77v-1h3.77q.69 0 1.153.462t.462 1.153v3.769z");
}
</style><path class="phywi73sh"/>`,
		"fallback": "material-symbols-light:transform-sharp",
	});
}

export default Component;
