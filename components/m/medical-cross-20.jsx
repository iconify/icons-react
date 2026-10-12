import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx32cnbxv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx32cnbxv"/>`,
		"fallback": "energy-icons:medical-cross-20",
	});
}

export default Component;
