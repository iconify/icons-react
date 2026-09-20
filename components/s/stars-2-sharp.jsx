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
		"content": `<style>.c9m14-bmw {
  fill: currentColor;
  d: path("m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275zM17.25 7l.525-2.225L16 3.3l2.35-.2l.9-2.1l.9 2.1l2.35.2l-1.775 1.475L21.25 7l-2-1.175z");
}
</style><path class="c9m14-bmw"/>`,
		"fallback": "material-symbols:stars-2-sharp",
	});
}

export default Component;
