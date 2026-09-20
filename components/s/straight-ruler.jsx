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
		"content": `<style>.cp7x0o58y {
  fill: var(--svg-color--292f33, #292f33);
  d: path("M9.515 6.687a1 1 0 0 1-1.414-1.415l3.536-3.536l1.414 1.415zm5.656 1.414a.999.999 0 1 1-1.414-1.414l1.415-1.415l1.414 1.415zm1.415 5.656a.999.999 0 1 1-1.414-1.414l3.536-3.536c.486.486.929.928 1.414 1.415zm5.656 1.414a1 1 0 0 1-1.413 0a1 1 0 0 1 0-1.414l1.414-1.415c.485.487.928.928 1.414 1.415zm1.415 5.657a1 1 0 0 1-1.415-1.414l3.536-3.535l1.414 1.414zm7.071 7.071a1 1 0 0 1-1.413 0a1 1 0 0 1-.001-1.414l3.536-3.535l1.414 1.414zm-1.415-5.657a1 1 0 1 1-1.414-1.413l1.415-1.414l1.413 1.413z");
}

.wn02v0b1g {
  fill: var(--svg-color--ffcc4d, #ffcc4d);
  d: path("M30.021 34.264a4 4 0 0 1-5.656 0L1.736 11.636a4 4 0 0 1 0-5.657l4.243-4.242a4 4 0 0 1 5.657 0l22.626 22.628a4 4 0 0 1 .001 5.656z");
}
</style><path class="wn02v0b1g"/><path class="cp7x0o58y"/>`,
		"fallback": "twemoji:straight-ruler",
	});
}

export default Component;
