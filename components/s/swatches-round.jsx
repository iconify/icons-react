import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa4oqjf0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa4oqjf0b"/>`,
		"fallback": "coolicons:swatches-round",
	});
}

export default Component;
