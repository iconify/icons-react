import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyu8irogq.css';
import '../../css/w/wy1zwjlfg.css';
import '../../css/u/u5jc2ibbn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyu8irogq"/><path class="wy1zwjlfg"/><path class="u5jc2ibbn"/>`,
		"fallback": "streamline-pixel:interface-essential-flag",
	});
}

export default Component;
