import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bulyclsfp {
  fill: currentColor;
  d: path("M2.5 11a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m8 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-2.451 1a2.5 2.5 0 0 0 0 1h-3.1a2.5 2.5 0 0 0 0-1zM4.25 5.663c.286.165.606.276.95.317l-1.453 4.356a2.5 2.5 0 0 0-.95-.317zm8 0c.286.165.606.276.95.317l-1.453 4.356a2.5 2.5 0 0 0-.95-.317zM5.5 2a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m8 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-2.451 1a2.5 2.5 0 0 0 0 1h-3.1a2.5 2.5 0 0 0 0-1z");
}
</style><path class="bulyclsfp"/>`,
		"fallback": "fluent:select-object-skew-16-regular",
	});
}

export default Component;
