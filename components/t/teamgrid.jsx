import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":163};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a7i55h9zm {
  fill: var(--svg-color--3c7dd0, #3c7dd0);
  d: path("m0 137.507l26.771-21.6V46.85L0 30.118zM43.503 8.821v144.352l29.966-25.25V34.681zM90.05 0v162.757l29.965-30.726V30.27zm139.18 46.85v69.057l26.771 21.6V30.116zM212.497 8.822v144.352l-29.966-25.25V34.681zM165.95 0l-29.966 30.27v101.761l29.966 30.726z");
}
</style><path class="a7i55h9zm"/>`,
		"fallback": "logos:teamgrid",
	});
}

export default Component;
