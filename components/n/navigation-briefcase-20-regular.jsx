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
		"content": `<style>.s9npx0bhc {
  fill: currentColor;
  d: path("M2 4.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m8 5q0-.257.05-.5H2.5a.5.5 0 0 0 0 1H10zm3-2v.5h-.5a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5H18v-.5a1.5 1.5 0 0 0-1.5-1.5h-2a1.5 1.5 0 0 0-1.5 1.5m1.5-.5h2a.5.5 0 0 1 .5.5v.5h-3v-.5a.5.5 0 0 1 .5-.5");
}
</style><path class="s9npx0bhc"/>`,
		"fallback": "fluent:navigation-briefcase-20-regular",
	});
}

export default Component;
