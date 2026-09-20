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
		"content": `<style>.ccg76on8h {
  fill: currentColor;
  d: path("M2 18V6h20v12zm2.5-1V7H3v10zm1 0h13V7h-13zm14 0H21V7h-1.5zM4.5 7H3zm15 0H21z");
}
</style><path class="ccg76on8h"/>`,
		"fallback": "material-symbols-light:stay-current-landscape-outline-sharp",
	});
}

export default Component;
