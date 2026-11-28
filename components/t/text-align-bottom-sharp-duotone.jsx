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
		"content": `<style>.abaekfnni {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 2H21C21.552 2 22 2.448 22 3V21C22 21.552 21.552 22 21 22H3C2.448 22 2 21.552 2 21V3C2 2.448 2.448 2 3 2H12Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.v8jia5qux {
  fill-rule: evenodd;
  d: path("M6 12H18V14H6V12ZM6 16H14V18H6V16Z");
}
</style><g class="cuyn6tgcc"><path class="abaekfnni"/><path clip-rule="evenodd" class="v8jia5qux"/></g>`,
		"fallback": "keyline-icons:text-align-bottom-sharp-duotone",
	});
}

export default Component;
