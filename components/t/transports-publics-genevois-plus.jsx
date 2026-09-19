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
		"content": `<style>.it6mtef0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.869 28.757a11.96 11.96 0 0 0 4.836-9.612c0-6.615-5.363-11.977-11.978-11.977h-5.455c-6.615 0-11.977 5.362-11.977 11.977s5.362 11.978 11.977 11.978h5.455c1.376 0 2.696-.238 3.927-.665m-3.926-23.29H42.5M32.361 27.969v12.863m-11.089-9.709H5.5M25.929 34.4h12.863");
}
</style><path class="it6mtef0j"/>`,
		"fallback": "arcticons:transports-publics-genevois-plus",
	});
}

export default Component;
