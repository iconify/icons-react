import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5p08eobw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="a5p08eobw"/>`,
		"fallback": "wordpress:search",
	});
}

export default Component;
