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
		"content": `<style>.k4ujq1bcl {
  fill: currentColor;
  d: path("M9.5 3a.5.5 0 0 0 0 1h1.132a.5.5 0 0 1 .447.276l1.39 2.78A2 2 0 0 0 12 7H9.854a3.5 3.5 0 0 0-3.13 1.935L6.19 10H4a3 3 0 1 0 2.83 4h1.934A2.5 2.5 0 0 0 11 12.618L11.809 11H12a2 2 0 0 0 1.837-1.208l.393.786a3 3 0 1 0 .894-.448l-.593-1.185Q14.757 9 15 9h1.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H15a2 2 0 0 0-1.837 1.208l-1.19-2.379A1.5 1.5 0 0 0 10.633 3zm5.187 8.492l.866 1.732a.5.5 0 1 0 .894-.448l-.866-1.732Q15.784 11 16 11a2 2 0 1 1-1.313.492M15 6h1v2h-1a1 1 0 1 1 0-2m-8.764 5h4.455l-.585 1.17a1.5 1.5 0 0 1-1.342.83H7c0-.768-.289-1.47-.764-2m5.275-1H7.309l.309-.618A2.5 2.5 0 0 1 9.854 8H12a1 1 0 1 1 0 2zM4 11a2 2 0 1 1 0 4a2 2 0 0 1 0-4");
}
</style><path class="k4ujq1bcl"/>`,
		"fallback": "fluent:vehicle-motorcycle-20-regular",
	});
}

export default Component;
