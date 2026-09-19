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
		"content": `<style>.i6hgi3xvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 24L14.575 40.744V7.255Z");
}

.unomch41h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.89 23.997L4.5 36.96V11.035Z");
}
</style><path class="unomch41h"/><path class="i6hgi3xvz"/>`,
		"fallback": "arcticons:pluralsight",
	});
}

export default Component;
