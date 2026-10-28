import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnbn3ib9k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="wnbn3ib9k"/>`,
		"fallback": "selfhst:synaplan",
	});
}

export default Component;
