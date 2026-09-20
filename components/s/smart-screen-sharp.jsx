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
		"content": `<style>.v9lre6i7s {
  fill: currentColor;
  d: path("M2 18V6h20v12zm3.5-1h13V7h-13zm7.75-4.365q-.275 0-.455-.18t-.18-.455t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18m-5 0q-.275 0-.455-.18T7.615 12t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18m7.5 0q-.275 0-.455-.18t-.18-.455t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18m-5 0q-.275 0-.455-.18t-.18-.455t.18-.455t.455-.18t.455.18t.18.455t-.18.455t-.455.18");
}
</style><path class="v9lre6i7s"/>`,
		"fallback": "material-symbols-light:smart-screen-sharp",
	});
}

export default Component;
