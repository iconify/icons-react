import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4czhobvw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4czhobvw"/>`,
		"fallback": "streamline-flex:tidal-wave",
	});
}

export default Component;
