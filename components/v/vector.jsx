import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu-qhrb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu-qhrb9n"/>`,
		"fallback": "fe:vector",
	});
}

export default Component;
