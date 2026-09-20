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
		"content": `<style>.et50xhhvt {
  fill: currentColor;
  d: path("M2.5 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zm0 4h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1M2 11.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m.5 3.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z");
}
</style><path class="et50xhhvt"/>`,
		"fallback": "fluent:line-horizontal-4-20-regular",
	});
}

export default Component;
