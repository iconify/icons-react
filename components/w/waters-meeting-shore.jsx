import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpc_vmb1a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpc_vmb1a"/>`,
		"fallback": "pinhead:waters-meeting-shore",
	});
}

export default Component;
