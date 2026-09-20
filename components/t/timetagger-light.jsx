import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf_i_1ouv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf_i_1ouv"/>`,
		"fallback": "selfhst:timetagger-light",
	});
}

export default Component;
