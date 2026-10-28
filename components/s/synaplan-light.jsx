import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_gly58ro.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="d_gly58ro"/>`,
		"fallback": "selfhst:synaplan-light",
	});
}

export default Component;
