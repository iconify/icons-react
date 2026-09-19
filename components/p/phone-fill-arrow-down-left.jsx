import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc54upbzb.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc54upbzb"/>`,
		"fallback": "f7:phone-fill-arrow-down-left",
	});
}

export default Component;
