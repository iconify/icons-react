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
		"content": `<style>.dczps7bvt {
  fill: currentColor;
  d: path("M6 21V4h9.75q.35 0 .65.163t.5.437L20 9l-3.1 4.4q-.2.275-.5.438t-.65.162H8v7z");
}
</style><path class="dczps7bvt"/>`,
		"fallback": "material-symbols:personal-places-sharp",
	});
}

export default Component;
