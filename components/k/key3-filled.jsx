import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwm-7vbci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zwm-7vbci"/>`,
		"fallback": "reicon:key3-filled",
	});
}

export default Component;
