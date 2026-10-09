import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wune1aczr.css';
import '../../css/g/gwm8q7b8w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wune1aczr"/><path class="gwm8q7b8w"/>`,
		"fallback": "energy-icons:rolling-pin-48",
	});
}

export default Component;
