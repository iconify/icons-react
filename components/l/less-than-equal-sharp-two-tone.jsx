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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.kl4zvkbzg {
  fill-rule: evenodd;
  d: path("M17 18V20H7V18H17Z");
}

.yk5a-tmjg {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16.773 5.7L9.887 10L17 14.45L16.47 15.29L15.94 16.14L7.47 10.85C7.178 10.66 7 10.34 7 10C7 9.66 7.177 9.33 7.47 9.15L15.713 4L16.773 5.7Z");
}
</style><g class="cuyn6tgcc"><path class="yk5a-tmjg"/><path clip-rule="evenodd" class="kl4zvkbzg"/></g>`,
		"fallback": "keyline-icons:less-than-equal-sharp-two-tone",
	});
}

export default Component;
