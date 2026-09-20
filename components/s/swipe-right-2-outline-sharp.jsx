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
		"content": `<style>.fk1obnbcn {
  fill: currentColor;
  d: path("m10.806 21l-5.667-5.654l.92-.894l3.441.857V6.5h1v10.152l-3.637-.983L11.214 20H18v-7h1v8zm1.521-6.5V5h1v9.5zm2.846 0V11h1v3.5zM3 7.385q1.058-2.227 3.502-3.566t5.44-1.338q2.139 0 4.16.746t4.013 2.279V3H21v4.385h-4.384V6.5H19.9q-1.938-1.585-3.906-2.36t-4.052-.775q-2.584 0-4.722 1.075T3.94 7.384zm11.448 9.75");
}
</style><path class="fk1obnbcn"/>`,
		"fallback": "material-symbols-light:swipe-right-2-outline-sharp",
	});
}

export default Component;
