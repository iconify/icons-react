import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u53jmomkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u53jmomkt"/>`,
		"fallback": "reicon:phone4",
	});
}

export default Component;
