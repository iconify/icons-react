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
		"content": `<style>.ehjmd61mh {
  fill: currentColor;
  d: path("M1 21v-9h2V7.725H2V3h9v4.725h-1V12h4V7.725h-1V3h9v4.725h-1V12h2v9zm15-9h3V8h-3zM5 12h3V8H5z");
}
</style><path class="ehjmd61mh"/>`,
		"fallback": "material-symbols:lab-panel-sharp",
	});
}

export default Component;
