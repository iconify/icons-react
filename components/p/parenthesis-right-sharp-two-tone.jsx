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
		"content": `<style>.q62l-w1xl {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.7142 1.6897L10.0098 2C12.5776 4.6962 14.0098 8.2767 14.0098 12C14.0098 15.7233 12.5776 19.3038 10.0098 22L9.7142 22.3103");
}
</style><path class="q62l-w1xl"/>`,
		"fallback": "keyline-icons:parenthesis-right-sharp-two-tone",
	});
}

export default Component;
