import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo2mek7rm.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo2mek7rm"/>`,
		"fallback": "fluent-mdl2:report-library",
	});
}

export default Component;
