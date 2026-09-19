import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4y_u1bam.css';

const viewBox = {"width":464,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4y_u1bam"/>`,
		"fallback": "ps:picassa",
	});
}

export default Component;
