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
		"content": `<style>.c2504ycse {
  d: path("m17.428 8.283l-.796 3.468l-1.018-4.185l-3.564-1.425l-.964 4.193l-.85-4.916L6.673 4L3 20h3.894l1.124-4.916l.85 4.916h3.9l.957-4.192L14.743 20h3.893L21 9.7z");
}
</style><path class="c2504ycse"/>`,
		"fallback": "token-branded:minima",
	});
}

export default Component;
