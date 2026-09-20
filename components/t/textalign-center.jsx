import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttyx4f7fu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttyx4f7fu"/>`,
		"fallback": "reicon:textalign-center",
	});
}

export default Component;
