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
		"content": `<style>.apfxcuhwk {
  fill: currentColor;
  d: path("M3 4.753c0-1.408 1.578-2.24 2.74-1.444l10.498 7.194a1.75 1.75 0 0 1 .01 2.88L5.749 20.685C4.59 21.492 3 20.66 3 19.248zm1.891-.206a.25.25 0 0 0-.39.206v14.495c0 .202.226.32.392.205l10.498-7.301a.25.25 0 0 0-.001-.412zM21 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="apfxcuhwk"/>`,
		"fallback": "fluent:next-24-regular",
	});
}

export default Component;
