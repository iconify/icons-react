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
		"content": `<style>.h49_jobtm {
  fill: currentColor;
  d: path("M8.05 14q-2.5 0-4.275-1.75T2 8t1.775-4.25T8.075 2h.4q-.55.625-.85 1.4t-.3 1.6q0 1.875 1.313 3.188T11.824 9.5q.575 0 1.125-.137T14 8.95q-.35 2.2-2.025 3.625T8.05 14M18 11h2V8h-2zM1 22v-2h2q-.025-.075-.038-.137t-.037-.138L2 16h12l-.925 3.725q-.025.075-.038.138T13 20h5v-3.175q-.9-.325-1.45-1.1T16 14V6h6v8q0 .95-.55 1.725t-1.45 1.1V20h3v2z");
}
</style><path class="h49_jobtm"/>`,
		"fallback": "material-symbols:meal-dinner",
	});
}

export default Component;
