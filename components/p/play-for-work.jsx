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
		"content": `<style>.ut-8u2t4n {
  fill: currentColor;
  d: path("M8.462 17.539Q7 16.077 7 14h1q0 1.65 1.175 2.825T12 18t2.825-1.175T16 14h1q0 2.077-1.461 3.539T12 19t-3.538-1.461M12 14.994l-3.308-3.307l.708-.714l2.1 2.1v-6.88h1v6.88l2.1-2.1l.708.714z");
}
</style><path class="ut-8u2t4n"/>`,
		"fallback": "material-symbols-light:play-for-work",
	});
}

export default Component;
