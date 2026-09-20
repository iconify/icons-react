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
		"content": `<style>.ug51hpxak {
  fill: currentColor;
  d: path("M14 5v-.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5V5zM2 6v4h12V6zm0 5.5V11h12v.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5");
}
</style><path class="ug51hpxak"/>`,
		"fallback": "fluent:layout-row-three-16-filled",
	});
}

export default Component;
