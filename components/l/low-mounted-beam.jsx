import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa865izzi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa865izzi"/>`,
		"fallback": "pinhead:low-mounted-beam",
	});
}

export default Component;
