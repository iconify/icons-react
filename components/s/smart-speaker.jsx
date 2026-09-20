import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqank8f6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hqank8f6x"/>`,
		"fallback": "reicon:smart-speaker",
	});
}

export default Component;
