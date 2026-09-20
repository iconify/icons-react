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
		"content": `<style>.beez5z-it {
  fill: currentColor;
  d: path("m10.95 16.866l4.958-4.958l-.72-.72l-4.244 4.245l-2.138-2.139l-.714.714zM5 21V3h9.5L19 7.5V21zm9-13V4H6v16h12V8zM6 4v4zv16z");
}
</style><path class="beez5z-it"/>`,
		"fallback": "material-symbols-light:task-outline-sharp",
	});
}

export default Component;
