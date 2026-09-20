import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4mytzbzy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4mytzbzy"/>`,
		"fallback": "streamline:interface-edit-pencil-change-edit-modify-pencil-write-writing",
	});
}

export default Component;
