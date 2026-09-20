import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kef3gpz4j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kef3gpz4j"/>`,
		"fallback": "roentgen:traffic-table",
	});
}

export default Component;
