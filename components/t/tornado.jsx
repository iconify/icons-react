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
		"content": `<style>.n_6nrkjdq {
  fill: currentColor;
  d: path("M2.73 4h18.54l-2.612 4.5H5.342zm3.186 5.5h12.169l-2.327 4H8.242zm2.9 5h6.368L12 20z");
}
</style><path class="n_6nrkjdq"/>`,
		"fallback": "material-symbols-light:tornado",
	});
}

export default Component;
