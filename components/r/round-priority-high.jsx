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
		"content": `<style>.ca0gilwts {
  fill: currentColor;
  d: path("M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2");
}

.rpxe9ibnu {
  cx: 12px;
  cy: 19px;
  r: 2px;
  fill: currentColor;
}
</style><circle class="rpxe9ibnu"/><path class="ca0gilwts"/>`,
		"fallback": "ic:round-priority-high",
	});
}

export default Component;
