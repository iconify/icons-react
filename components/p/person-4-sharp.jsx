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
		"content": `<style>.lmme8y2xx {
  fill: currentColor;
  d: path("M9.175 11.825Q8 10.65 8 9V5.5q0-.625.438-1.062T9.5 4q.375 0 .713.175t.537.5q.2-.325.538-.5T12 4t.713.175t.537.5q.2-.325.538-.5T14.5 4q.625 0 1.063.438T16 5.5V9q0 1.65-1.175 2.825T12 13t-2.825-1.175M4 21v-2.8q0-.85.438-1.562T5.6 15.55q1.55-.775 3.15-1.162T12 14t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 18.2V21z");
}
</style><path class="lmme8y2xx"/>`,
		"fallback": "material-symbols:person-4-sharp",
	});
}

export default Component;
