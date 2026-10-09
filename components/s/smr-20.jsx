import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgxstebhl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgxstebhl"/>`,
		"fallback": "energy-icons:smr-20",
	});
}

export default Component;
