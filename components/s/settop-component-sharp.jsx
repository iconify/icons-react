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
		"content": `<style>.nhst2qbna {
  fill: currentColor;
  d: path("M3 16V8h18v8zm2.5-3.5h4.923v-1H5.5zm7.692.308h1.616v-1.616h-1.616zm3 0h1.616v-1.616h-1.616z");
}
</style><path class="nhst2qbna"/>`,
		"fallback": "material-symbols-light:settop-component-sharp",
	});
}

export default Component;
