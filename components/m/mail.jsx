import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjov7tf-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjov7tf-c"/>`,
		"fallback": "noviair:mail",
	});
}

export default Component;
