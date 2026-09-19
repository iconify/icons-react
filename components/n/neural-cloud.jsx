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
		"content": `<style>.a32casbih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.52 20.074c0-.965 1.166-1.741 2.613-1.741h7.234c1.447 0 2.612.776 2.612 1.74m0 7.853c0 .965-1.165 1.741-2.612 1.741h-7.234c-1.447 0-2.612-.776-2.612-1.74v-4.42m-7.626-5.175v11.336L8.605 18.355v1.469m0 3.657v6.187");
}

.ksnhw5bdp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 31.686H4.5V16.314H24zh19.5V16.314H24");
}
</style><path class="ksnhw5bdp"/><path class="a32casbih"/>`,
		"fallback": "arcticons:neural-cloud",
	});
}

export default Component;
