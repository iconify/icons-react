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
		"content": `<style>.otm00fbme {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.4819 3.9349L12 2L15.5181 3.9349M18.4819 5.5651L22 7.5L18.4819 9.4349M15.5181 11.0651L12 13L8.4819 11.0651M5.5181 9.4349L2 7.5L5.5181 5.5651M1.4819 11.7151L12 17.5L22.5181 11.7151M1.4819 16.2151L12 22L22.5181 16.2151");
}
</style><path class="otm00fbme"/>`,
		"fallback": "keyline-icons:layers-dashed-sharp-fill",
	});
}

export default Component;
