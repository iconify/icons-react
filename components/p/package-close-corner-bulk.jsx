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
		"content": `<style>.bef827pdg {
  d: path("M4 7h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2m10.707 6.293L17 15.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L18.414 17l2.293 2.293a.999.999 0 1 1-1.414 1.414L17 18.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414L15.586 17l-2.293-2.293a.999.999 0 1 1 1.414-1.414");
}

.cuyn6tgcc {
  fill: currentColor;
}

.j47300bhi {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m3.106 7.553l1-2C4.643 4.478 5.652 3.001 7 3h10c1.348.001 2.357 1.478 2.894 2.553l1 2A1 1 0 0 1 20 9H9v11a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V8c0-.155.036-.308.106-.447");
}
</style><g class="cuyn6tgcc"><path class="j47300bhi"/><path class="bef827pdg"/></g>`,
		"fallback": "coolicons:package-close-corner-bulk",
	});
}

export default Component;
