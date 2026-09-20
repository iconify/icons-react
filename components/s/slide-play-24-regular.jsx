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
		"content": `<style>.dz21soc0d {
  fill: currentColor;
  d: path("M4.75 4A2.75 2.75 0 0 0 2 6.75v10.5A2.75 2.75 0 0 0 4.75 20h6.748a6.5 6.5 0 0 1-.422-1.5H4.75c-.69 0-1.25-.56-1.25-1.25V6.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v4.982A6.5 6.5 0 0 1 22 12.81V6.75A2.75 2.75 0 0 0 19.25 4zM23 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-7 1.999a.5.5 0 0 0 .777.416l3.002-1.999a.5.5 0 0 0 0-.832l-3.002-2a.5.5 0 0 0-.777.417z");
}
</style><path class="dz21soc0d"/>`,
		"fallback": "fluent:slide-play-24-regular",
	});
}

export default Component;
