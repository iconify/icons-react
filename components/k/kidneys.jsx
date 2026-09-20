import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gic_b5baa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gic_b5baa"/>`,
		"fallback": "pinhead:kidneys",
	});
}

export default Component;
