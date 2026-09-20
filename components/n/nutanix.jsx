import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoj4zbc2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoj4zbc2g"/>`,
		"fallback": "thesvg:nutanix",
	});
}

export default Component;
