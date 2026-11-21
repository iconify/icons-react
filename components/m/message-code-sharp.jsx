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
		"content": `<style>.uczjj7bch {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.2929 8.2071L10 8.5L7.5 11L10 13.5L10.2929 13.7929M13.7071 8.2071L14 8.5L16.5 11L14 13.5L13.7071 13.7929M4.5686 16.353C2.915 14.8839 2 12.9769 2 11C2 6.5817 6.4772 3 12 3C17.5228 3 22 6.5817 22 11C22 15.4183 17.5228 19 12 19C11.1845 19 10.3721 18.9202 9.5808 18.7624L5 21Z");
}
</style><path class="uczjj7bch"/>`,
		"fallback": "keyline-icons:message-code-sharp",
	});
}

export default Component;
