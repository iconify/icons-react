import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gumdym6bg.css';
import '../../css/u/utf3i9a_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gumdym6bg"/><path class="utf3i9a_f"/>`,
		"fallback": "pixel:receipt",
	});
}

export default Component;
