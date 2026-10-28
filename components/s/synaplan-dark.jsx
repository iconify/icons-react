import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjo9zj5kz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="vjo9zj5kz"/>`,
		"fallback": "selfhst:synaplan-dark",
	});
}

export default Component;
