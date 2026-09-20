import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xdw8yy37i {
  fill: currentColor;
  d: path("M6.709 2.505a.75.75 0 0 0-1.418 0l-2.25 6.5a.75.75 0 0 0 1.418.49l.344-.995h2.394l.344.995a.75.75 0 0 0 1.418-.49zM6 5.043L6.678 7H5.323zM4 11a.75.75 0 0 0 0 1.5h2.527l-3.133 4.309A.75.75 0 0 0 4 18h4a.75.75 0 0 0 0-1.5H5.473l3.134-4.309A.75.75 0 0 0 8 11zm10.25-9a.75.75 0 0 1 .75.75v12.572l1.447-1.579a.75.75 0 0 1 1.106 1.014l-2.75 3a.75.75 0 0 1-1.106 0l-2.75-3a.75.75 0 0 1 1.106-1.014l1.447 1.579V2.75a.75.75 0 0 1 .75-.75");
}
</style><path class="xdw8yy37i"/>`,
		"fallback": "fluent:text-sort-ascending-20-filled",
	});
}

export default Component;
