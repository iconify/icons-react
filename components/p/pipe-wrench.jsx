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
		"content": `<style>.a_bfu-bzn {
  d: path("m13.061 8.111l4.596 4.596l-1.768 1.768l-4.596-4.596Zm-3.536 3.535l2.829 2.829l-5.657 5.657l-2.829-2.829Z");
}

.rpq-tnq8r {
  d: path("m10.586 9.172l4.242 4.242l-1.767 1.768l-4.243-4.243Z");
}

.uh8jz51br {
  d: path("m15.889 2.454l4.596 4.596l-1.767 1.768l-2.829-2.828l-2.475 2.474l-1.768-1.767Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uh8jz51br"/><path class="a_bfu-bzn"/><path class="rpq-tnq8r"/></g>`,
		"fallback": "uix-sharp:pipe-wrench",
	});
}

export default Component;
