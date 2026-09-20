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
		"content": `<style>.pevyajsok {
  fill: currentColor;
  d: path("M21 4.753c0-1.408-1.578-2.24-2.74-1.444L7.763 10.503a1.75 1.75 0 0 0-.01 2.88l10.499 7.302c1.16.807 2.749-.024 2.749-1.437zm-1.891-.206a.25.25 0 0 1 .39.206v14.495a.25.25 0 0 1-.392.205L8.61 12.152a.25.25 0 0 1 .001-.412zM3 3.75a.75.75 0 0 1 1.5 0v16.5a.75.75 0 0 1-1.5 0z");
}
</style><path class="pevyajsok"/>`,
		"fallback": "fluent:previous-24-regular",
	});
}

export default Component;
