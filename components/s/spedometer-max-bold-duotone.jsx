import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_zpg8bdp.css';
import '../../css/s/sgn1aep-s.css';
import '../../css/u/ufg40xb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_zpg8bdp"/><path class="sgn1aep-s"/><path class="ufg40xb6y"/>`,
		"fallback": "solar:spedometer-max-bold-duotone",
	});
}

export default Component;
