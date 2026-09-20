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
		"content": `<style>.bdxufo51p {
  fill: currentColor;
  d: path("M4.77 18h-.54l-.38-2H3v-5h2V7h14v4h2v5h-.85l-.38 2h-.54l-.38-2H5.15zm7.73-7H18V8h-5.5zM6 11h5.5V8H6zm-2 4h16v-3H4zm16 0H4z");
}
</style><path class="bdxufo51p"/>`,
		"fallback": "material-symbols-light:king-bed-outline-sharp",
	});
}

export default Component;
