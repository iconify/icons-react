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
		"content": `<style>.lt6fqpbll {
  fill: currentColor;
  d: path("M4 9.77V5h1v3.235q1-1.896 2.851-3.066T12 4q2.739 0 4.849 1.627t2.824 4.142h-1.06q-.696-2.108-2.486-3.438T12 5Q9.979 5 8.36 6.044T5.909 8.77H8.77v1zm3.5 7.73h9.154l-2.827-3.77l-2.615 3.308l-1.75-2.115zM4 21v-8.384h1V20h14v-7.384h1V21z");
}
</style><path class="lt6fqpbll"/>`,
		"fallback": "material-symbols-light:reset-image-outline-sharp",
	});
}

export default Component;
