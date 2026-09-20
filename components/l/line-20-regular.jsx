import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.djo59ubwy {
  fill: currentColor;
  d: path("M17.854 2.15a.5.5 0 0 1 0 .706l-15 15a.5.5 0 0 1-.708-.707l15-15a.5.5 0 0 1 .708 0");
}
</style><path class="djo59ubwy"/>`,
		"fallback": "fluent:line-20-regular",
	});
}

export default Component;
