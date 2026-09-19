import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tosj05bbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tosj05bbw"/>`,
		"fallback": "bxs:receipt",
	});
}

export default Component;
