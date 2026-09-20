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
		"content": `<style>.dau0dxspz {
  fill: currentColor;
  d: path("M8 22v-1.75Q5.325 19.2 3.663 17T2 12h2V4l18-2v1.5L10.5 4.8v1.7H22V8H10.5v4H22q0 2.8-1.662 5T16 20.25V22zM8 6.5h1V4.95l-1 .125zm-2.5 0h1V5.25l-1 .1zM8 12h1V8H8zm-2.5 0h1V8h-1z");
}
</style><path class="dau0dxspz"/>`,
		"fallback": "material-symbols:ramen-dining",
	});
}

export default Component;
