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
		"content": `<style>.ya7fz96hg {
  fill: currentColor;
  d: path("m13 10.17l-2.5-2.5V1H13zM20 4h-2.5v7h-1V2H14v9.17l6 6zM9.5 3H7.01v1.18L9.5 6.67zm11.69 18.19L2.81 2.81L1.39 4.22L7 9.83v4.3l-3.32-1.9L2 13.88L9.68 22h9.54l.56.61z");
}
</style><path class="ya7fz96hg"/>`,
		"fallback": "ic:sharp-do-not-touch",
	});
}

export default Component;
