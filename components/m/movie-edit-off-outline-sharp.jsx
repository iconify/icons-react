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
		"content": `<style>.ubuob6b5l {
  fill: currentColor;
  d: path("M2 20V4h2l6 6H4v8h8v2zM22 4v6h-9.15l-6-6H8.5l1.675 3.325l.675.675h2.65l-2-4H14l2 4h3l-2-4zm-.5 10.425l-.925-.925zM20.475 17.6L17.4 14.55l3.175-3.175l3.075 3.05zM15.5 19.5h.95l.1-.1l-.95-.95l-.1.1zm6.45 2.45l-1.425 1.425l-2.9-2.925l-.55.55H14v-3.075l.55-.525L.625 3.475L2.05 2.05z");
}
</style><path class="ubuob6b5l"/>`,
		"fallback": "material-symbols:movie-edit-off-outline-sharp",
	});
}

export default Component;
