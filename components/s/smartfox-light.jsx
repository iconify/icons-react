import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3er0flzz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3er0flzz"/>`,
		"fallback": "selfhst:smartfox-light",
	});
}

export default Component;
