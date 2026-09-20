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
		"content": `<style>.fcortjbfe {
  fill: currentColor;
  d: path("m14.93 14.03l.862-3.13l-2.684-1.854l-.862 3.131zM4.617 19.288l-2.287-1.04l2.284-4.879zM7 20.769v-6.73l2.439 6.73zm4.846-.405L6.675 6.165l9.44-3.433l5.19 14.179zm.604-1.326l7.55-2.75l-4.456-12.25L8 6.788zm1.55-7.5");
}
</style><path class="fcortjbfe"/>`,
		"fallback": "material-symbols-light:playing-cards-outline-sharp",
	});
}

export default Component;
