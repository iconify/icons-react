import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzuy0jr7p.css';

const viewBox = {"width":14,"height":9};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzuy0jr7p"/>`,
		"fallback": "jam:quote",
	});
}

export default Component;
