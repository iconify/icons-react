import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kek-0ac7m.css';
import '../../css/r/rqbzrccbz.css';
import '../../css/c/ce-i1mh_z.css';
import '../../css/u/uljji2but.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kek-0ac7m"/><path clip-rule="evenodd" class="rqbzrccbz"/><path class="ce-i1mh_z"/><path class="uljji2but"/>`,
		"fallback": "solar:siren-rounded-bold",
	});
}

export default Component;
