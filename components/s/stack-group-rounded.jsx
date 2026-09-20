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
		"content": `<style>.bgi95qacd {
  fill: currentColor;
  d: path("M10.616 21q-.667 0-1.141-.475T9 19.386v-3.77q0-.269-.173-.442T8.385 15h-3.77q-.666 0-1.14-.475T3 13.385v-8.77q0-.666.475-1.14T4.615 3h8.77q.666 0 1.14.475T15 4.615v3.77q0 .269.173.442t.443.173h3.769q.666 0 1.14.475t.475 1.14v8.77q0 .666-.475 1.14t-1.14.475z");
}
</style><path class="bgi95qacd"/>`,
		"fallback": "material-symbols-light:stack-group-rounded",
	});
}

export default Component;
