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
		"content": `<style>.fclx02bgs {
  fill: currentColor;
  d: path("M8 17.75a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 1.5 0zm4.78-15.03l2 2a.75.75 0 0 1-.976 1.133l-.084-.073l-1.47-1.47l-1.47 1.47a.75.75 0 0 1-1.133-.976l.073-.084l2-2a.75.75 0 0 1 .976-.073zM13 20.75a.75.75 0 0 1-1.5 0v-12a.75.75 0 0 1 1.5 0zm5-3a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 1.5 0z");
}
</style><path class="fclx02bgs"/>`,
		"fallback": "fluent:text-indent-decrease-ltr-90-24-regular",
	});
}

export default Component;
