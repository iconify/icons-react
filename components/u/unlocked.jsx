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
		"content": `<style>.gdwmsnb0w {
  fill: var(--svg-color--ffac33, #ffac33);
  d: path("M32 32a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4z");
}

.pfg41nwak {
  fill: var(--svg-color--aab8c2, #aab8c2);
  d: path("M18 0c-4.612 0-8.483 3.126-9.639 7.371l3.855 1.052A6 6 0 0 1 18 4a6 6 0 0 1 6 6v10h4V10c0-5.522-4.477-10-10-10");
}
</style><path class="pfg41nwak"/><path class="gdwmsnb0w"/>`,
		"fallback": "twemoji:unlocked",
	});
}

export default Component;
