import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_jz1gb1w.css';

const viewBox = {"width":2016,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_jz1gb1w"/>`,
		"fallback": "vs:sheep",
	});
}

export default Component;
