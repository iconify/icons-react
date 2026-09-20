import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov2igo9rd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov2igo9rd"/>`,
		"fallback": "reicon:star5",
	});
}

export default Component;
