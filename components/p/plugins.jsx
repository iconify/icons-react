import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtz5swbmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="dtz5swbmn"/>`,
		"fallback": "wordpress:plugins",
	});
}

export default Component;
