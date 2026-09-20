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
		"content": `<style>.v7co_q-fd {
  fill: currentColor;
  d: path("M8 17.75a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 1.5 0zm6.78-15.03a.75.75 0 0 1 .073.976l-.073.084l-2 2a.75.75 0 0 1-.976.073l-.084-.073l-2-2a.75.75 0 0 1 .976-1.133l.084.073l1.47 1.47l1.47-1.47a.75.75 0 0 1 1.06 0M13 20.75a.75.75 0 0 1-1.5 0v-12a.75.75 0 0 1 1.5 0zm5-3a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 1.5 0z");
}
</style><path class="v7co_q-fd"/>`,
		"fallback": "fluent:text-indent-increase-ltr-90-24-regular",
	});
}

export default Component;
