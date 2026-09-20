import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r3cfn-biu {
  fill: var(--svg-color--ccd6dd, #ccd6dd);
  d: path("m15 26l8 8s1 1 2 1h1s1 0 1-1V2s0-1-1-1h-1c-1 0-2 1-2 1l-8 8z");
}

.zzskni6tb {
  fill: var(--svg-color--8899a6, #8899a6);
  d: path("M9 10s-2 0-2 2v12c0 2 2 2 2 2h6l8 8s1 1 2 1h1s1 0 1-1V2s0-1-1-1h-1c-1 0-2 1-2 1l-8 8z");
}
</style><path class="zzskni6tb"/><path class="r3cfn-biu"/>`,
		"fallback": "twemoji:speaker-low-volume",
	});
}

export default Component;
