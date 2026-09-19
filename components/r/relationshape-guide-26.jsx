import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppuquib5b.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppuquib5b"/>`,
		"fallback": "garden:relationshape-guide-26",
	});
}

export default Component;
