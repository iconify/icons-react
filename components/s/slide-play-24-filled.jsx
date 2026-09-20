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
		"content": `<style>.qjc3z15-z {
  fill: currentColor;
  d: path("M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v6.06A6.5 6.5 0 0 0 11.498 20H4.75A2.75 2.75 0 0 1 2 17.25zM23 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-7 1.999a.5.5 0 0 0 .777.416l3.002-1.999a.5.5 0 0 0 0-.832l-3.002-2a.5.5 0 0 0-.777.417z");
}
</style><path class="qjc3z15-z"/>`,
		"fallback": "fluent:slide-play-24-filled",
	});
}

export default Component;
