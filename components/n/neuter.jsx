import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d27n0hbhs.css';

const viewBox = {"width":15,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d27n0hbhs"/>`,
		"fallback": "fontisto:neuter",
	});
}

export default Component;
