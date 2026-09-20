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
		"content": `<style>.u1e94tbzt {
  fill: currentColor;
  d: path("M4 20.98V4H3V3h18v1h-1v17q-2.061 0-3.655-1.24t-1.954-3.26H9.584q-.368 2-1.958 3.24T4 20.98m5.73-5.48h4.54V4H9.73z");
}
</style><path class="u1e94tbzt"/>`,
		"fallback": "material-symbols-light:shades-sharp",
	});
}

export default Component;
