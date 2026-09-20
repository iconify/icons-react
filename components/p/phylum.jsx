import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljmd1i_bj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljmd1i_bj"/>`,
		"fallback": "selfhst:phylum",
	});
}

export default Component;
