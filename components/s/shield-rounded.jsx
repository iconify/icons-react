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
		"content": `<style>.ijzf-5x4z {
  fill: currentColor;
  d: path("M11.714 20.817q-.15-.025-.281-.075q-2.952-1.125-4.692-3.816T5 11.1V6.817q0-.51.295-.923t.755-.6l5.385-2q.292-.106.565-.106t.566.106l5.384 2q.46.187.755.6t.295.923V11.1q0 3.135-1.74 5.826t-4.693 3.816q-.13.05-.28.075t-.287.025t-.287-.025");
}
</style><path class="ijzf-5x4z"/>`,
		"fallback": "material-symbols-light:shield-rounded",
	});
}

export default Component;
