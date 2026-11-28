import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf33qeb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf33qeb6a"/>`,
		"fallback": "iconaut:minimize-solid",
	});
}

export default Component;
