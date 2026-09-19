import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpsjndblj.css';
import '../../css/i/igk3ecc7a.css';
import '../../css/i/ihjfc8h8i.css';
import '../../css/d/doqds4bjf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpsjndblj"/><path class="igk3ecc7a"/><path class="ihjfc8h8i"/><path class="doqds4bjf"/>`,
		"fallback": "fxemoji:lastquartermoon",
	});
}

export default Component;
