import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x2ezgpbiw {
  fill: currentColor;
  d: path("M2 2.5a.5.5 0 0 1 1 0v11a.5.5 0 0 1-1 0zm12 .502a1 1 0 0 0-1.579-.816l-7 4.963a1 1 0 0 0-.006 1.628l7 5.037A1 1 0 0 0 14 13.003zM6 7.965l7-4.963v10z");
}
</style><path class="x2ezgpbiw"/>`,
		"fallback": "fluent:previous-16-regular",
	});
}

export default Component;
