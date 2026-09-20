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
		"content": `<style>.q8rp43q7l {
  fill: currentColor;
  d: path("M6.385 20.616V13H8V9.092L4.792 5.884L8.1 2.597l.689.688l-2.581 2.6L9 8.678V13h1.616v7.616zm7 0V13H15V9.952q-1.108-.177-1.861-1.038q-.754-.861-.754-2.03q0-1.303.906-2.209q.905-.906 2.209-.906t2.21.906t.906 2.21q0 1.168-.754 2.029T16 9.952V13h1.616v7.616zM15.506 9q.876 0 1.492-.623q.617-.624.617-1.5t-.62-1.492t-1.49-.616t-1.496.62t-.626 1.49t.624 1.495t1.5.626");
}
</style><path class="q8rp43q7l"/>`,
		"fallback": "material-symbols-light:oral-disease",
	});
}

export default Component;
