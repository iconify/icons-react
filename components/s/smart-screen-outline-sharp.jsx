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
		"content": `<style>.opatfvfap {
  fill: currentColor;
  d: path("M2 18V6h20v12zm2.5-1V7H3v10zm1 0h13V7h-13zm14 0H21V7h-1.5zM4.5 7H3zm15 0H21zm-6.25 5.635q-.275 0-.455-.18t-.18-.455t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18m-5 0q-.275 0-.455-.18T7.615 12t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18m7.5 0q-.275 0-.455-.18t-.18-.455t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18m-5 0q-.275 0-.455-.18t-.18-.455t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18");
}
</style><path class="opatfvfap"/>`,
		"fallback": "material-symbols-light:smart-screen-outline-sharp",
	});
}

export default Component;
