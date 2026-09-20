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
		"content": `<style>.hbshgzb3j {
  fill: currentColor;
  d: path("M7.713 15.713Q8 15.425 8 15t-.288-.712T7 14t-.712.288T6 15t.288.713T7 16t.713-.288M6 13h2V8H6zm4 2h8v-2h-8zm0-4h8V9h-8zm-8 9V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="hbshgzb3j"/>`,
		"fallback": "material-symbols:problem-outline-sharp",
	});
}

export default Component;
