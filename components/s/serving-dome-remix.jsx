import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mht9c3b7a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mht9c3b7a"/>`,
		"fallback": "streamline:serving-dome-remix",
	});
}

export default Component;
