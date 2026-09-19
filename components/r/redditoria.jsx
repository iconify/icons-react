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
		"content": `<style>.lukv08b5f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.197 22.753V42.5a1 1 0 0 0 1 1h18.715a1.887 1.887 0 0 0 1.36-3.195l-16.88-17.552");
}

.wwbjllbpy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.197 4.5h11.074a9.126 9.126 0 0 1 9.127 9.126v0a9.126 9.126 0 0 1-9.127 9.127H13.197h0V5.5a1 1 0 0 1 1-1");
}
</style><path class="wwbjllbpy"/><path class="lukv08b5f"/>`,
		"fallback": "arcticons:redditoria",
	});
}

export default Component;
