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
		"content": `<style>.iu6rr_04a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 23.958L32.804 38.054L20.018 21.202a7.076 7.076 0 1 1 11.422 0L18.652 38.054L5.865 21.202a7.08 7.08 0 0 1 7.62-10.995");
}
</style><path class="iu6rr_04a"/>`,
		"fallback": "arcticons:twint",
	});
}

export default Component;
