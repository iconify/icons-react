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
		"content": `<style>.i4u5qub9f {
  fill: currentColor;
  d: path("M9.877 10.508Q9 9.63 9 8.385t.877-2.123T12 5.385t2.123.877T15 8.385t-.877 2.123t-2.123.877t-2.123-.877m5.546 8.108v-4.497q.585.18 1.147.39q.561.211 1.1.464q.596.298.963.83T19 16.969v1.646zm-5.846-2.5V13.88q.606-.133 1.211-.2T12 13.617t1.212.066t1.211.199v2.235zM5 18.616v-1.647q0-.634.367-1.166t.964-.83q.538-.253 1.1-.463q.561-.211 1.146-.39v4.496z");
}
</style><path class="i4u5qub9f"/>`,
		"fallback": "material-symbols-light:person-apron-sharp",
	});
}

export default Component;
