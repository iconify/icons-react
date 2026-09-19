import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqc5nf5ck.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqc5nf5ck"/>`,
		"fallback": "gis:north-arrow",
	});
}

export default Component;
