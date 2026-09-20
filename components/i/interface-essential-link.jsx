import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl0knccre.css';
import '../../css/i/iqt0h4b6a.css';
import '../../css/x/xncxpgo4a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl0knccre"/><path class="iqt0h4b6a"/><path class="xncxpgo4a"/>`,
		"fallback": "streamline-pixel:interface-essential-link",
	});
}

export default Component;
