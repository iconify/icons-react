import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njo06tbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njo06tbfs"/>`,
		"fallback": "iconaut:planet-solid",
	});
}

export default Component;
