import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh1auqbgw.css';
import '../../css/u/uguz_8b8z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh1auqbgw"/><path class="uguz_8b8z"/>`,
		"fallback": "selfhst:monica",
	});
}

export default Component;
