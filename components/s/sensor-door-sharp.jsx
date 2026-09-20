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
		"content": `<style>.nvmvqlbky {
  fill: currentColor;
  d: path("M5 21V3h14v18zm10.498-8q.416 0 .709-.291t.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293");
}
</style><path class="nvmvqlbky"/>`,
		"fallback": "material-symbols-light:sensor-door-sharp",
	});
}

export default Component;
