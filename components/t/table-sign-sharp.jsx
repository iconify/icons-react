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
		"content": `<style>.zpzn9tjko {
  fill: currentColor;
  d: path("M12 13.5q.825 0 1.413.588T14 15.5q0 .575-.275 1.013t-.725.712V20h4q.825 0 1.413.588T19 22H5q0-.825.575-1.412T7 20h4v-2.75q-.45-.275-.725-.725T10 15.5q0-.825.575-1.413T12 13.5M7 6v2h10V6zM3 16V2h18v14h-5.025q.125-.875-.15-1.687T15 12.875q-.225-.275-.5-.488T13.925 12H17v-2H7v2h3.05q-.3.175-.575.375t-.5.475q-.55.625-.812 1.438T8.025 16z");
}
</style><path class="zpzn9tjko"/>`,
		"fallback": "material-symbols:table-sign-sharp",
	});
}

export default Component;
