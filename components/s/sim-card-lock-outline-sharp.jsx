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
		"content": `<style>.f1v67yb1n {
  fill: currentColor;
  d: path("M9.116 15.77h5.769V11h-1V9.885q0-.778-.55-1.332Q12.787 8 12 8t-1.336.554t-.548 1.33V11h-1zM10.885 11V9.892q0-.47.326-.797T12 8.77t.79.326t.326.797V11zM5 21V8.423L10.423 3H19v18zm1-1h12V4h-7.15L6 8.85zm0 0h12z");
}
</style><path class="f1v67yb1n"/>`,
		"fallback": "material-symbols-light:sim-card-lock-outline-sharp",
	});
}

export default Component;
