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
		"content": `<style>.v9p4ee8pl {
  fill: currentColor;
  d: path("M15 4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM5 5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm7.5 1A1.5 1.5 0 0 1 14 7.5v5a1.5 1.5 0 0 1-1.5 1.5h-7a1.5 1.5 0 0 1-1.492-1.347L4 12.5v-5A1.5 1.5 0 0 1 5.5 6zm-7 1a.5.5 0 0 0-.5.5v5l.01.1a.5.5 0 0 0 .49.4h7a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm6 1a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m4 1.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0-3a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5");
}
</style><path class="v9p4ee8pl"/>`,
		"fallback": "fluent:microwave-20-regular",
	});
}

export default Component;
