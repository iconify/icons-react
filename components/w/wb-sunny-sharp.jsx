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
		"content": `<style>.pvc5g9iln {
  fill: currentColor;
  d: path("M11.5 3.885V1.5h1v2.385zm0 18.615v-2.384h1V22.5zm8.616-10v-1H22.5v1zM1.5 12.5v-1h2.385v1zm16.816-6.108l-.708-.708l1.442-1.453l.72.719zM4.95 19.77l-.72-.719l1.454-1.442l.708.707zm14.1 0l-1.442-1.453l.707-.708l1.454 1.442zM5.685 6.392L4.23 4.95l.719-.72l1.442 1.454zm2.777 9.147Q7 14.077 7 12t1.462-3.538T12 7t3.539 1.462T17 12t-1.461 3.539T12 17t-3.538-1.461");
}
</style><path class="pvc5g9iln"/>`,
		"fallback": "material-symbols-light:wb-sunny-sharp",
	});
}

export default Component;
