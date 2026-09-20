import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qlgp5ebmv {
  fill: currentColor;
  d: path("M12 6v20h13.5a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 25.5 6zm-2 0H6.5A2.5 2.5 0 0 0 4 8.5v15A2.5 2.5 0 0 0 6.5 26H10zM2 8.5A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 23.5z");
}
</style><path class="qlgp5ebmv"/>`,
		"fallback": "fluent:panel-left-32-regular",
	});
}

export default Component;
