import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esqg6lffk.css';
import '../../css/m/m_dyr3b-l.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esqg6lffk"/><path class="m_dyr3b-l"/>`,
		"fallback": "foundation:power",
	});
}

export default Component;
