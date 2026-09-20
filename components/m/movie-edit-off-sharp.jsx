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
		"content": `<style>.tc6662bir {
  fill: currentColor;
  d: path("m20.19 15.016l.925-.956l-.924-.944l-.95.95zm-.638 1.873l-2.21-2.185l2.849-2.848l2.19 2.203zM3 19V5h1.808l9.415 9.416l-2.377 2.376V19zm12.552-5.894L7.639 5h1.419l1.425 2.844l.156.156h2.919l-1.5-3h2.5l1.5 3h3l-1.5-3H21v2.696zm5.821 8.46l-.713.713l-3.246-3.252l-.974.973h-2.21v-2.21l.974-.967L1.72 3.341l.714-.714z");
}
</style><path class="tc6662bir"/>`,
		"fallback": "material-symbols-light:movie-edit-off-sharp",
	});
}

export default Component;
