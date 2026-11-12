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
		"content": `<style>.ctu7he3ei {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 6.42632L2 17.5737C2 19.4211 3.60065 20.5888 4.90313 19.6916L10.9998 15.2316V8.76844L4.90312 4.30838C3.60064 3.41122 2 4.57895 2 6.42632Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.mrqs5-_hf {
  fill: currentColor;
  d: path("M11 7.12303L11 8.76844V15.2316V16.877C11 18.4934 12.4673 19.5152 13.6612 18.7302L21.0786 13.8532C22.3071 13.0455 22.3071 10.9545 21.0786 10.1468L13.6612 5.26983C12.4673 4.48482 11 5.50658 11 7.12303Z");
}
</style><path clip-rule="evenodd" class="ctu7he3ei"/><path class="mrqs5-_hf"/>`,
		"fallback": "solar:rewind-forward-bold-duotone",
	});
}

export default Component;
