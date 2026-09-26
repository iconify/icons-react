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
		"content": `<style>.mhxz97bpy {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 6.8477L12 12M12 12L22 6.8477M7 4.4239L17 9.4239M12 12L12 22L2 17.1523L2 6.8477L12 2L22 6.8477L22 13M15.7071 15.7071L22.2929 22.2929M22.2929 15.7071L15.7071 22.2929");
}
</style><path class="mhxz97bpy"/>`,
		"fallback": "keyline-icons:package-x-sharp",
	});
}

export default Component;
