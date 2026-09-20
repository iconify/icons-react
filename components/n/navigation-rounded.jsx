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
		"content": `<style>.yhv5_ybjv {
  fill: currentColor;
  d: path("m12 18l-6.45 2.75q-.325.125-.612.063t-.488-.263t-.262-.5t.062-.625L11.075 4.05q.125-.3.388-.45T12 3.45t.537.15t.388.45l6.825 15.375q.125.325.062.625t-.262.5t-.488.263t-.612-.063z");
}
</style><path class="yhv5_ybjv"/>`,
		"fallback": "material-symbols:navigation-rounded",
	});
}

export default Component;
