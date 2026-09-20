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
		"content": `<style>.xt6xfzbhn {
  fill: currentColor;
  d: path("M10 17.48L4.52 12L10 6.52zm4 0V6.52L19.48 12zm.885-2.124L18.24 12l-3.356-3.356z");
}
</style><path class="xt6xfzbhn"/>`,
		"fallback": "material-symbols-light:switch-right-outline-sharp",
	});
}

export default Component;
