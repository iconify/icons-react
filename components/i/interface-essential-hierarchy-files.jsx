import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzi3s0umo.css';
import '../../css/k/kz83e19cw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzi3s0umo"/><path class="kz83e19cw"/>`,
		"fallback": "streamline-pixel:interface-essential-hierarchy-files",
	});
}

export default Component;
