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

.fgl0cis6t {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2.3819 20.0001L11.1056 2.5528C11.275 2.214 11.6212 2 12 2C12.3788 2 12.725 2.214 12.8944 2.5528L21.6181 20.0001L23 20.0001L23 22.0001L1 22.0001L1 20.0001L2.3819 20.0001Z");
}

.ozgse4b5p {
  d: path("M11 22.0001L11 13C11 12.4477 11.4477 12 12 12C12.3788 12 12.725 12.214 12.8944 12.5528L17.6181 22.0001L11 22.0001Z");
}
</style><g class="cuyn6tgcc"><path class="fgl0cis6t"/><path class="ozgse4b5p"/></g>`,
		"fallback": "keyline-icons:tent-sharp-duotone",
	});
}

export default Component;
