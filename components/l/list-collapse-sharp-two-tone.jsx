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
		"content": `<style>.bp5hlb-sz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 2L6 10M2.7071 6.7071L6 10L9.2929 6.7071M6 22L6 14M2.7071 17.2929L6 14L9.2929 17.2929M12 6L22 6M12 12L22 12M12 18L22 18");
}
</style><path class="bp5hlb-sz"/>`,
		"fallback": "keyline-icons:list-collapse-sharp-two-tone",
	});
}

export default Component;
