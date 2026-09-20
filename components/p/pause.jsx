import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn493_bmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zn493_bmv"/>`,
		"fallback": "reicon:pause",
	});
}

export default Component;
