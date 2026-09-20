import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp5-fccdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mp5-fccdf"/>`,
		"fallback": "reicon:ruler-pen2",
	});
}

export default Component;
