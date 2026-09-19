import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rvh3gbbln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.769 5.5l6.094 6.095l-6.094 6.095l-6.095-6.095zm4.403 37L23.565 27.893l7.912-7.912l-6.094-6.095l-8.627 8.627V12.205H8.137V42.5h8.619v-9.227l9.227 9.227z");
}
</style><path class="rvh3gbbln"/>`,
		"fallback": "arcticons:konzum",
	});
}

export default Component;
