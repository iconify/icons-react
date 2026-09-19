import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfcu66bxq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfcu66bxq"/>`,
		"fallback": "file-icons:txl",
	});
}

export default Component;
