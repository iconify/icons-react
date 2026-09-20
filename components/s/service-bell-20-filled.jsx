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
		"content": `<style>.pyjaunb8l {
  fill: currentColor;
  d: path("M8 5a2 2 0 1 1 4 0v.79c2.892.86 5 3.539 5 6.71a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5a7 7 0 0 1 5-6.71zm2.5 3.5c.422 0 .84.004 1.268.158c.413.148.87.451 1.316 1.12a.5.5 0 0 0 .832-.555c-.555-.832-1.18-1.28-1.81-1.506C11.505 7.5 10.93 7.5 10.52 7.5h-.02a.5.5 0 0 0 0 1m-7 5.5a1.5 1.5 0 0 0 0 3h13a1.5 1.5 0 0 0 0-3z");
}
</style><path class="pyjaunb8l"/>`,
		"fallback": "fluent:service-bell-20-filled",
	});
}

export default Component;
