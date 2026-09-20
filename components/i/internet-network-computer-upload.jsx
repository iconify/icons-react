import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkff7l4ev.css';
import '../../css/s/stwvedcof.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkff7l4ev"/><path class="stwvedcof"/>`,
		"fallback": "streamline-pixel:internet-network-computer-upload",
	});
}

export default Component;
