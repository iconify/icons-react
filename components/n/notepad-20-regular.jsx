import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pug5rtbhv {
  fill: currentColor;
  d: path("M7.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM7 10.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-1-11a.5.5 0 0 0-.5.5V3h-.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h6a.5.5 0 0 0 .354-.146l4-4A.5.5 0 0 0 16 13.5v-9A1.5 1.5 0 0 0 14.5 3H14v-.5a.5.5 0 0 0-1 0V3h-2.5v-.5a.5.5 0 0 0-1 0V3H7v-.5a.5.5 0 0 0-.5-.5m8 2a.5.5 0 0 1 .5.5V13h-2.5a1.5 1.5 0 0 0-1.5 1.5V17H5.5a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5zm-.207 10L12 16.293V14.5a.5.5 0 0 1 .5-.5z");
}
</style><path class="pug5rtbhv"/>`,
		"fallback": "fluent:notepad-20-regular",
	});
}

export default Component;
