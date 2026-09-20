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
		"content": `<style>.nk5agebqs {
  fill: currentColor;
  d: path("m3.646 17.777l-.896-.439L8.308 6.224l.896.438zm6.023 0l-.896-.438l5.558-11.116l.896.438zm6.023 0l-.896-.438l5.558-11.116l.896.439z");
}
</style><path class="nk5agebqs"/>`,
		"fallback": "material-symbols-light:process-chart-sharp",
	});
}

export default Component;
