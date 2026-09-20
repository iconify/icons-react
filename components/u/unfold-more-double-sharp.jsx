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
		"content": `<style>.zpam3pb8q {
  fill: currentColor;
  d: path("m12.025 22.571l-3.883-3.863L8.85 18l3.175 3.15l3.156-3.156l.708.714zm0-5l-3.883-3.863L8.85 13l3.175 3.15l3.156-3.156l.708.714zM8.85 11l-.713-.733l3.869-3.869l3.883 3.889l-.714.713l-3.17-3.156zm0-5l-.713-.733l3.869-3.869l3.883 3.889l-.714.713l-3.17-3.156z");
}
</style><path class="zpam3pb8q"/>`,
		"fallback": "material-symbols-light:unfold-more-double-sharp",
	});
}

export default Component;
