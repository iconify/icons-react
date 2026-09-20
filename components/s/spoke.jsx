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
		"content": `<style>.szd19nb9k {
  fill: currentColor;
  d: path("M12 11q-1.65 0-2.825-1.175T8 7t1.175-2.825T12 3t2.825 1.175T16 7t-1.175 2.825T12 11M7 21q-1.65 0-2.825-1.175T3 17t1.175-2.825T7 13t2.825 1.175T11 17t-1.175 2.825T7 21m10 0q-1.65 0-2.825-1.175T13 17t1.175-2.825T17 13t2.825 1.175T21 17t-1.175 2.825T17 21");
}
</style><path class="szd19nb9k"/>`,
		"fallback": "material-symbols:spoke",
	});
}

export default Component;
