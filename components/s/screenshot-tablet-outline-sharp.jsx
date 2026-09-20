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
		"content": `<style>.jz-232hcz {
  fill: currentColor;
  d: path("M2 19V5h20v14zM4.5 6H3v12h1.5zm1 12h13V6h-13zm14-12v12H21V6zm0 0H21zm-15 0H3zm9.423 10.616h3.193v-3.193h-.885v2.308h-2.308zm-7.038-6.039h.884V8.269h2.308v-.885H6.884z");
}
</style><path class="jz-232hcz"/>`,
		"fallback": "material-symbols-light:screenshot-tablet-outline-sharp",
	});
}

export default Component;
