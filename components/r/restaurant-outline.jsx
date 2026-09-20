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
		"content": `<style>.suybrdybg {
  fill: currentColor;
  d: path("M7.5 21.5v-9.034q-1.16-.177-1.965-1.064q-.804-.886-.804-2.171V2.5h1v6.73H7.5V2.5h1v6.73h1.77V2.5h1v6.73q0 1.286-.805 2.172q-.806.887-1.965 1.064V21.5zm9.23 0v-8h-2.46V7q0-1.671.942-2.96q.944-1.29 2.519-1.501V21.5z");
}
</style><path class="suybrdybg"/>`,
		"fallback": "material-symbols-light:restaurant-outline",
	});
}

export default Component;
