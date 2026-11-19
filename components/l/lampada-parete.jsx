import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzrj2wbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzrj2wbfj"/>`,
		"fallback": "cbi:lampada-parete",
	});
}

export default Component;
