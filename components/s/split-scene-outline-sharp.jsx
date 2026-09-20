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
		"content": `<style>.flu_6jb3e {
  fill: currentColor;
  d: path("M3 20V4h6v2H5v12h4v2zm8 2V2h2v2h8v16h-8v2zm2-4h6V6h-6zm-8 0V6zm14 0V6z");
}
</style><path class="flu_6jb3e"/>`,
		"fallback": "material-symbols:split-scene-outline-sharp",
	});
}

export default Component;
