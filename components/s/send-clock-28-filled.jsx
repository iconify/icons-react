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
		"content": `<style>.pl11aq5wl {
  fill: currentColor;
  d: path("M20.5 14a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13M2.044 4.077c-.275-1.03.783-1.911 1.746-1.453l21.497 10.25c.85.405.937 1.527.265 2.083a7.5 7.5 0 0 0-12.536 6.022l-9.226 4.4c-.963.459-2.02-.42-1.746-1.45L4.06 16.39a1 1 0 0 1 .825-.731l9.882-1.412c.286-.041.286-.455 0-.496L4.883 12.34a1 1 0 0 1-.824-.731zM20.5 16.5a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H21v-3a.5.5 0 0 0-.5-.5");
}
</style><path class="pl11aq5wl"/>`,
		"fallback": "fluent:send-clock-28-filled",
	});
}

export default Component;
