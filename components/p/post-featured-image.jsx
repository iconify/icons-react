import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmsnur0zk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="pmsnur0zk"/>`,
		"fallback": "wordpress:post-featured-image",
	});
}

export default Component;
