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
		"content": `<style>.eyjemub3j {
  fill: currentColor;
  d: path("m11.65 14.58l-2.327-2.326l7.602-7.602l2.327 2.327zm1.196 4.632l1-1h8.289v1zm-7.136.019q-.689 0-1.338-.2t-1.218-.596l5.106-5.1l2.951 2.946l-1.519 1.577q-.665.684-1.555 1.028t-1.828.345z");
}
</style><path class="eyjemub3j"/>`,
		"fallback": "material-symbols-light:surgical-sharp",
	});
}

export default Component;
