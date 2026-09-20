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
		"content": `<style>.qw8-fub2d {
  fill: currentColor;
  d: path("M18.385 19v-1.577q0-.348.23-.578t.577-.23H21v-.846h-2.616V15h2.577q.349 0 .579.23t.23.578v.769q0 .348-.23.578t-.578.23h-1.808v.846h2.615V19zM7.009 17.384l4.183-6.467L7.354 5h1.284l3.331 5.192h.023L15.375 5h1.29l-3.901 5.917l4.227 6.468H15.7l-3.708-5.714h-.023L8.3 17.385z");
}
</style><path class="qw8-fub2d"/>`,
		"fallback": "material-symbols-light:subscript-outline",
	});
}

export default Component;
