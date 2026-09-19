import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijtpvlb4b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijtpvlb4b"/>`,
		"fallback": "carbon:state-exhibit",
	});
}

export default Component;
