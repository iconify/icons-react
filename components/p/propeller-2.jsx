import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grvocubmv.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grvocubmv"/>`,
		"fallback": "fontisto:propeller-2",
	});
}

export default Component;
