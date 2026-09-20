import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye28mvbqc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye28mvbqc"/>`,
		"fallback": "ix:mail-filled",
	});
}

export default Component;
