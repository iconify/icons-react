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
		"content": `<style>.nrjlbih3m {
  fill: currentColor;
  d: path("M20 15V7H6V2h16v13zM2 22V9h16v13z");
}
</style><path class="nrjlbih3m"/>`,
		"fallback": "material-symbols:select-window-2-sharp",
	});
}

export default Component;
