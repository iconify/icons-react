import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_05epb2z.css';
import '../../css/y/y3_5i7bsv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_05epb2z"/><path class="y3_5i7bsv"/>`,
		"fallback": "energy-icons:pc-tower-20-bold",
	});
}

export default Component;
