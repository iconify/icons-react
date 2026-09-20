import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r349_ou6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r349_ou6d"/>`,
		"fallback": "reicon:shield2",
	});
}

export default Component;
