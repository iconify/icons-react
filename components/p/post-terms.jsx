import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd7lvq7fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="gd7lvq7fq"/>`,
		"fallback": "wordpress:post-terms",
	});
}

export default Component;
