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
		"content": `<style>.k4a582bwi {
  fill: currentColor;
  d: path("M6.876 7.921a.5.5 0 0 1-.047.706l-.998.873H8.5a.5.5 0 0 1 0 1H5.83l1 .874a.5.5 0 1 1-.66.753l-2-1.75a.5.5 0 0 1 0-.753l2-1.75a.5.5 0 0 1 .706.047m7.293 2.58l-.998.873a.5.5 0 0 0 .658.753l2-1.75a.5.5 0 0 0 0-.753l-2-1.75a.5.5 0 0 0-.658.753l.998.873H11.5a.5.5 0 0 0 0 1zM2 5.998a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8.005a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8.005a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.998a1 1 0 0 0-1-1z");
}
</style><path class="k4a582bwi"/>`,
		"fallback": "fluent:scale-fit-20-regular",
	});
}

export default Component;
