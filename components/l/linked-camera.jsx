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
		"content": `<style>.o3gaa0b4u {
  fill: currentColor;
  d: path("M17 9c0-1.11-.89-2-2-2V4H9L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9zm-5 10c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5");
}

.rsihs8yvi {
  fill: currentColor;
  d: path("M16 3.33c2.58 0 4.67 2.09 4.67 4.67H22c0-3.31-2.69-6-6-6zM16 6c1.11 0 2 .89 2 2h1.33c0-1.84-1.49-3.33-3.33-3.33z");
}

.tfll-zbqg {
  cx: 12px;
  cy: 14px;
  r: 3.2px;
  fill: currentColor;
}
</style><circle class="tfll-zbqg"/><path class="rsihs8yvi"/><path class="o3gaa0b4u"/>`,
		"fallback": "ic:linked-camera",
	});
}

export default Component;
