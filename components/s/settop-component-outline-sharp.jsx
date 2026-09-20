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
		"content": `<style>.z-53y8h9b {
  fill: currentColor;
  d: path("M3 16V8h18v8zm1-1h16V9H4zm1.5-2.5h4.923v-1H5.5zm7.692.308h1.616v-1.616h-1.616zm3 0h1.616v-1.616h-1.616zM4 15V9z");
}
</style><path class="z-53y8h9b"/>`,
		"fallback": "material-symbols-light:settop-component-outline-sharp",
	});
}

export default Component;
