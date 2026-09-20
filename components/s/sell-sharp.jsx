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
		"content": `<style>.wthk_7bxd {
  fill: currentColor;
  d: path("M12.825 22.825L2 12V2h10l10.8 10.85zM6.5 8q.625 0 1.063-.437T8 6.5t-.437-1.062T6.5 5t-1.062.438T5 6.5t.438 1.063T6.5 8");
}
</style><path class="wthk_7bxd"/>`,
		"fallback": "material-symbols:sell-sharp",
	});
}

export default Component;
