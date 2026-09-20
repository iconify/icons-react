import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz3rlt3dw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nz3rlt3dw"/>`,
		"fallback": "reicon:watch3",
	});
}

export default Component;
