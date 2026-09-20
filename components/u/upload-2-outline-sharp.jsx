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
		"content": `<style>.x0m4pvb0o {
  fill: currentColor;
  d: path("M5 21v-1h14v1zm4.635-3.77v-6.788h-3.27L12 3l5.616 7.442h-3.27v6.789zm1-1h2.711V9.424h2.208L12 4.635L8.427 9.423h2.208zM12 9.424");
}
</style><path class="x0m4pvb0o"/>`,
		"fallback": "material-symbols-light:upload-2-outline-sharp",
	});
}

export default Component;
