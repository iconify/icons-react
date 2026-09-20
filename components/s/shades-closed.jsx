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
		"content": `<style>.m931pkbdd {
  fill: currentColor;
  d: path("M3.98 21.02V4H3V3h18v1h-.98v17.02h-1.068q-.344-.991-1.216-1.611q-.87-.62-1.967-.62q-1.102 0-1.941.62q-.84.62-1.184 1.61h-1.313q-.339-.99-1.171-1.61t-1.93-.62q-1.12 0-1.992.62q-.87.62-1.215 1.61zM12.5 4h-1v13.837h1z");
}
</style><path class="m931pkbdd"/>`,
		"fallback": "material-symbols-light:shades-closed",
	});
}

export default Component;
