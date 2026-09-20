import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odb41q30t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odb41q30t"/>`,
		"fallback": "pixelarticons:pointer",
	});
}

export default Component;
