import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tpbsqgb4m {
  fill: currentColor;
  d: path("M8.002 6.247v1.748H4.25A2.25 2.25 0 0 0 2 10.245v11.5a2.25 2.25 0 0 0 2.25 2.25h19.504a2.25 2.25 0 0 0 2.25-2.25v-11.5a2.25 2.25 0 0 0-2.25-2.25h-3.75V6.247a2.25 2.25 0 0 0-2.25-2.25h-7.502a2.25 2.25 0 0 0-2.25 2.25m2.25-.75h7.501a.75.75 0 0 1 .75.75v1.748h-9V6.247a.75.75 0 0 1 .75-.75M4.25 9.495h19.504a.75.75 0 0 1 .75.75V14h-3.998v-1.25a.75.75 0 0 0-1.5 0V14h-10v-1.25a.75.75 0 0 0-1.5 0V14H3.5v-3.755a.75.75 0 0 1 .75-.75M19.006 15.5v1.25a.75.75 0 0 0 1.5 0V15.5h3.997v6.245a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75V15.5h4.006v1.25a.75.75 0 0 0 1.5 0V15.5z");
}
</style><path class="tpbsqgb4m"/>`,
		"fallback": "fluent:toolbox-28-regular",
	});
}

export default Component;
