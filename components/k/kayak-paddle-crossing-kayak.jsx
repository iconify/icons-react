import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb3l59rwr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb3l59rwr"/>`,
		"fallback": "pinhead:kayak-paddle-crossing-kayak",
	});
}

export default Component;
