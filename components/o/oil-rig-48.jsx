import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exb5o8bii.css';
import '../../css/h/hd9r6tb-k.css';
import '../../css/e/etujiwxzv.css';
import '../../css/i/i7nyym9lt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exb5o8bii"/><path class="hd9r6tb-k"/><path class="etujiwxzv"/><path class="i7nyym9lt"/>`,
		"fallback": "energy-icons:oil-rig-48",
	});
}

export default Component;
