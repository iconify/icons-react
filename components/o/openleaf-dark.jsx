import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q__a3ub2g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q__a3ub2g"/>`,
		"fallback": "selfhst:openleaf-dark",
	});
}

export default Component;
