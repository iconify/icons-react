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
		"content": `<style>.zvdfbmipk {
  fill: currentColor;
  d: path("M12.5 8v8l4-4zM5 19h3V5H5zm5 0h9V5h-9zm-2 0H5zm-5 2V3h18v18z");
}
</style><path class="zvdfbmipk"/>`,
		"fallback": "material-symbols:left-panel-open-outline-sharp",
	});
}

export default Component;
