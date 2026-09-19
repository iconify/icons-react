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
		"content": `<style>.eldh4_epq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.53 18.49c-.151 2.392 10.468 2.557 11.586 2.425c0 0-13.66 19.611-12.152 21.883c.894 1.348 7.528-4.187 15.966-12.63c2.864-3 3.547-1.943 4.545-.39c2.546 3.893 7.164 10.652 8.439 10.045c2.258-1.059-4.402-19.366-4.402-19.366s10.435-3.61 9.592-6.136c-.712-2.126-12.428-1.13-12.428-1.13l-.035-.142c-.267-1.13-2.05-8.496-3.61-8.028c-1.914.57-3.581 8.683-5.001 8.92c-5.775 1.081-12.39 2.965-12.5 4.546");
}
</style><path class="eldh4_epq"/>`,
		"fallback": "arcticons:starhub",
	});
}

export default Component;
