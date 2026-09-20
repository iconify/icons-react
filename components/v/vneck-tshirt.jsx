import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol27jzu8p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol27jzu8p"/>`,
		"fallback": "pinhead:vneck-tshirt",
	});
}

export default Component;
