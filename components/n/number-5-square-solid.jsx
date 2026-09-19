import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quyp2zbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="quyp2zbgs"/>`,
		"fallback": "iconoir:number-5-square-solid",
	});
}

export default Component;
