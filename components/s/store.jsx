import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yag1ve2fw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yag1ve2fw"/>`,
		"fallback": "reicon:store",
	});
}

export default Component;
