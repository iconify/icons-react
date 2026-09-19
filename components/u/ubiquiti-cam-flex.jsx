import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-iyy091g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n-iyy091g"/>`,
		"fallback": "cbi:ubiquiti-cam-flex",
	});
}

export default Component;
