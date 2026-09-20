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
		"content": `<style>.cmas25b1x {
  fill: currentColor;
  d: path("M6 4.5V6H4a2 2 0 0 0-2 2v2h4v-.5a.5.5 0 0 1 1 0v.5h6v-.5a.5.5 0 0 1 1 0v.5h4.003V8a2 2 0 0 0-2-2H14V4.5A1.5 1.5 0 0 0 12.5 3h-5A1.5 1.5 0 0 0 6 4.5M7.5 4h5a.5.5 0 0 1 .5.5V6H7V4.5a.5.5 0 0 1 .5-.5m10.503 7H14v.5a.5.5 0 1 1-1 0V11H7v.5a.5.5 0 0 1-1 0V11H2v4a2 2 0 0 0 2 2h12.003a2 2 0 0 0 2-2z");
}
</style><path class="cmas25b1x"/>`,
		"fallback": "fluent:toolbox-20-filled",
	});
}

export default Component;
