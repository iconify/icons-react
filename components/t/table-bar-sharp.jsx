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
		"content": `<style>.un_h8xbjp {
  fill: currentColor;
  d: path("m6 20l2-5h3v-4.025Q7.175 10.85 4.587 9.85T2 7.5q0-1.45 2.925-2.475T12 4q4.175 0 7.088 1.025T22 7.5q0 1.35-2.588 2.35T13 10.975V15h3l2 5h-2l-1.2-3H9.2L8 20z");
}
</style><path class="un_h8xbjp"/>`,
		"fallback": "material-symbols:table-bar-sharp",
	});
}

export default Component;
