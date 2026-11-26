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
		"content": `<style>.priskdbml {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.7322 15.7322L15.9874 4.4771L21.0005 2.9995L19.5229 8.0126L8.2678 19.2678ZM2.7071 13.7071L3 14L10 21L10.2929 21.2929M6.5 17.5L3 21L2.7071 21.2929");
}
</style><path class="priskdbml"/>`,
		"fallback": "keyline-icons:sword-sharp",
	});
}

export default Component;
