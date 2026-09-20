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
		"content": `<style>.vsk2v76ms {
  fill: var(--svg-color--fff, #fff);
  d: path("M14.093 13C14.13 7.28 8.713 3.95 6 3h7.623c3.613 2.654 4.422 7.773 4.375 10zM8.5 10v11l5-2.785z");
}
</style><path class="vsk2v76ms"/>`,
		"fallback": "token-branded:rdn",
	});
}

export default Component;
