import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzzcr4b4h.css';
import '../../css/y/ynjyyh6_s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jzzcr4b4h"/><path class="ynjyyh6_s"/>`,
		"fallback": "selfhst:pdfding",
	});
}

export default Component;
