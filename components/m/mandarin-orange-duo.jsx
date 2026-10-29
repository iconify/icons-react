import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u_-t_-0bv.css';
import '../../css/g/g7mb8abgs.css';
import '../../css/r/r-nr70vpq.css';
import '../../css/f/f24-gqbst.css';
import '../../css/m/m31z5l3iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="u_-t_-0bv"/><path class="g7mb8abgs wm-a"/><path class="r-nr70vpq wm-a"/><path class="f24-gqbst"/><path class="m31z5l3iz"/></g>`,
		"fallback": "withicons:mandarin-orange-duo",
	});
}

export default Component;
