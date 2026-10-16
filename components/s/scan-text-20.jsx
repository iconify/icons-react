import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdt8pcsop.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdt8pcsop"/>`,
		"fallback": "energy-icons:scan-text-20",
	});
}

export default Component;
