import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmsz-pnxw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rmsz-pnxw"/>`,
		"fallback": "streamline-flex:tablet-capsule-remix",
	});
}

export default Component;
