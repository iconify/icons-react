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
		"content": `<style>.nbtmwvp6k {
  cx: 18px;
  cy: 18px;
  r: 8px;
  fill: var(--svg-color--bbddf5, #bbddf5);
}

.q3ncj0etc {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--269, #269);
}
</style><circle class="q3ncj0etc"/><circle class="nbtmwvp6k"/>`,
		"fallback": "twemoji:radio-button",
	});
}

export default Component;
