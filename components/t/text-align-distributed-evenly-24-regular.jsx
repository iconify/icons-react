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
		"content": `<style>.btblj3bar {
  fill: currentColor;
  d: path("M2 5.75A.75.75 0 0 1 2.75 5h18.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 5.75m3.28 14.47l-.72-.72h14.88l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72H4.56l.72-.72a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 0 0 1.06-1.06M2.75 11.5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="btblj3bar"/>`,
		"fallback": "fluent:text-align-distributed-evenly-24-regular",
	});
}

export default Component;
