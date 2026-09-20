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
		"content": `<style>.ig_mtb54g {
  fill: currentColor;
  d: path("M16.5 16V8l-4 4zM10 19h9V5h-9zm-7 2V3h18v18z");
}
</style><path class="ig_mtb54g"/>`,
		"fallback": "material-symbols:left-panel-close-sharp",
	});
}

export default Component;
