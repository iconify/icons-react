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
		"content": `<style>.r_89zyhos {
  fill: currentColor;
  d: path("M6.687 1.777a1.5 1.5 0 0 1 2.629 0l5.499 9.999a1.5 1.5 0 0 1-1.314 2.223H2.502a1.5 1.5 0 0 1-1.314-2.223zm1.752.482a.5.5 0 0 0-.876 0l-5.499 9.999a.5.5 0 0 0 .438.74h10.999a.5.5 0 0 0 .438-.74z");
}
</style><path class="r_89zyhos"/>`,
		"fallback": "fluent:triangle-16-regular",
	});
}

export default Component;
