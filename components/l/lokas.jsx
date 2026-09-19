import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sa0256ilo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.076 20.343c9.011 0 8.757-14.223-.915-14.325c-5.82-.03-9.468 3.708-9.661 11.175c.03 10.566 12.191 15.544 18.896 8.493c-5.039-.007-9.489-.469-8.27-5.364z");
}

.usi0msb6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.924 27.657c-9.011 0-8.757 14.223.915 14.325c5.82.03 9.468-3.708 9.661-11.175c-.03-10.566-12.191-15.544-18.896-8.493c5.039.007 9.489.469 8.27 5.364z");
}
</style><path class="sa0256ilo"/><path class="usi0msb6x"/>`,
		"fallback": "arcticons:lokas",
	});
}

export default Component;
