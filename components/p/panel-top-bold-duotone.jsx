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
		"content": `<style>.br5lnd2bf {
  fill: currentColor;
  d: path("M13 2L11 2C7.22876 2 5.34315 2 4.17157 3.17157C3.19724 4.1459 3.03321 6.36409 3.00559 9L20.9944 9C20.9668 6.36409 20.8028 4.1459 19.8284 3.17157C18.6569 2 16.7712 2 13 2Z");
}

.t2z1e_f9o {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.1716 20.8284C5.34318 22 7.2288 22 11 22L13 22C16.7713 22 18.6569 22 19.8285 20.8284C21 19.6569 21 17.7712 21 14L21 10C21 9.91573 21.0001 9.0824 21.0001 9L3.00006 9C3.00005 9.0824 3.00003 9.91573 3.00003 10L3.00003 14C3.00003 17.7712 3.00003 19.6569 4.1716 20.8284Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><path clip-rule="evenodd" class="t2z1e_f9o"/><path class="br5lnd2bf"/>`,
		"fallback": "solar:panel-top-bold-duotone",
	});
}

export default Component;
