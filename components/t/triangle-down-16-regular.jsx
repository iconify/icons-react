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
		"content": `<style>.ojn6mvbvi {
  fill: currentColor;
  d: path("M9.312 14.223a1.5 1.5 0 0 1-2.629 0l-5.5-10a1.5 1.5 0 0 1 1.315-2.222h10.999a1.5 1.5 0 0 1 1.314 2.223zm-1.753-.482a.5.5 0 0 0 .877 0l5.499-10a.5.5 0 0 0-.438-.74H2.498a.5.5 0 0 0-.438.74z");
}
</style><path class="ojn6mvbvi"/>`,
		"fallback": "fluent:triangle-down-16-regular",
	});
}

export default Component;
