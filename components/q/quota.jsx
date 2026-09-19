import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5k2r532v.css';
import '../../css/h/hm-ebxrua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5k2r532v"/><path class="hm-ebxrua"/>`,
		"fallback": "eos-icons:quota",
	});
}

export default Component;
