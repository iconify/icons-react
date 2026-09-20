import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzn1nb-_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzn1nb-_b"/>`,
		"fallback": "thesvg:lidl",
	});
}

export default Component;
