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
		"content": `<style>.bhanyfb0r {
  fill: currentColor;
  d: path("M18.25 13.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM6.877 10.508Q6 9.63 6 8.385t.877-2.123T9 5.385t2.123.877T12 8.385t-.877 2.123T9 11.385t-2.123-.877M2 18.616v-1.647q0-.619.36-1.158q.361-.54.97-.838q1.416-.679 2.834-1.018q1.417-.34 2.836-.34t2.837.34t2.832 1.018q.61.298.97.838q.361.539.361 1.158v1.646z");
}
</style><path class="bhanyfb0r"/>`,
		"fallback": "material-symbols-light:person-add-sharp",
	});
}

export default Component;
