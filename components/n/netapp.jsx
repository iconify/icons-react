import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc09p20cq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc09p20cq"/>`,
		"fallback": "thesvg-color:netapp",
	});
}

export default Component;
