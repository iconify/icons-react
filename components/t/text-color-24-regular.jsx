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
		"content": `<style>.th2v-z-8j {
  fill: currentColor;
  d: path("M18.75 15A2.25 2.25 0 0 1 21 17.25v2.5A2.25 2.25 0 0 1 18.75 22H5.25A2.25 2.25 0 0 1 3 19.75v-2.5A2.25 2.25 0 0 1 5.25 15zm-13.5 1.5a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75zM12 2a.75.75 0 0 1 .697.475l3.75 9.5a.75.75 0 0 1-1.394.55l-.998-2.528L14 10h-4q-.028 0-.056-.003l-.997 2.528a.75.75 0 1 1-1.394-.55l3.75-9.5l.05-.103A.75.75 0 0 1 12 2m-1.464 6.5h2.928L12 4.791z");
}
</style><path class="th2v-z-8j"/>`,
		"fallback": "fluent:text-color-24-regular",
	});
}

export default Component;
