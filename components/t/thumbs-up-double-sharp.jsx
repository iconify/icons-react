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
		"content": `<style>.x-jl3t8wk {
  fill: currentColor;
  d: path("m17.9 17l1.1-2.575V9h-5.7l.325-2.2L12.4 5.6L16 2l1.5 1.5L17 7h6v3l-3 7zM1 21V11h2v10zm4 0V11l5-5l1.5 1.5L11 11h6v3l-3 7z");
}
</style><path class="x-jl3t8wk"/>`,
		"fallback": "material-symbols:thumbs-up-double-sharp",
	});
}

export default Component;
