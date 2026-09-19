import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ml3fm1eci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h7.75v7.75H5.5zm9.75 0H23v7.75h-7.75zm9.75 0h7.75v7.75H25zm9.75 0h7.75v7.75h-7.75zM5.5 15.25h7.75V23H5.5zm19.5 0h7.75V23H25zm9.75 0h7.75V23h-7.75zM5.5 25h7.75v7.75H5.5zm9.75 0H23v7.75h-7.75zM25 25h7.75v7.75H25zm9.75 0h7.75v7.75h-7.75zM5.5 34.75h7.75v7.75H5.5zm9.75 0H23v7.75h-7.75zm9.75 0h7.75v7.75H25zm9.75 0h7.75v7.75h-7.75z");
}
</style><path class="ml3fm1eci"/>`,
		"fallback": "arcticons:lendingclub",
	});
}

export default Component;
