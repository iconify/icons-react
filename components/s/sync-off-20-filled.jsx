import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lnglpwbta {
  fill: currentColor;
  d: path("M17.938 9h-5.632l.675-2.363a.5.5 0 0 0-.962-.274l-2 7a.5.5 0 0 0 .962.274L12.02 10H18a8 8 0 0 1-16 0h5.98l-.96 3.363a.5.5 0 0 0 .96.274l2-7a.5.5 0 0 0-.96-.274L8.265 9H2.062a8.001 8.001 0 0 1 15.876 0");
}
</style><path class="lnglpwbta"/>`,
		"fallback": "fluent:sync-off-20-filled",
	});
}

export default Component;
