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
		"content": `<style>.vak625aok {
  fill: currentColor;
  d: path("M13.242 15.192q.477-.476.44-1.15q-.038-.673-.59-1.057q-1.344-.935-2.686-1.89L7.72 9.188q-.298-.204-.54.035q-.242.24-.034.537q.97 1.339 1.93 2.67t1.908 2.663q.398.552 1.074.577t1.183-.477M5.106 19q-.278 0-.511-.112q-.233-.113-.393-.338q-.604-1.076-.906-2.252q-.302-1.177-.302-2.41q.006-1.826.735-3.45t1.96-2.83T8.546 5.7T12 5q1.872 0 3.507.71q1.635.711 2.853 1.93t1.93 2.853T21 14q0 1.204-.302 2.34q-.302 1.137-.894 2.133q-.142.264-.387.395T18.9 19z");
}
</style><path class="vak625aok"/>`,
		"fallback": "material-symbols-light:speed-2-rounded",
	});
}

export default Component;
