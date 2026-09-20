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
		"content": `<style>.uwuphccsh {
  fill: currentColor;
  d: path("M19 16.425L7.977 5.446L10.423 3H19zm1.423 5.683l-3.838-3.839l.713-.707L19 19.263V21H5V8.423l.87-.87l-3.824-3.822l.714-.708l18.37 18.371z");
}
</style><path class="uwuphccsh"/>`,
		"fallback": "material-symbols-light:no-sim-sharp",
	});
}

export default Component;
