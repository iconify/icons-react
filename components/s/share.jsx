import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b34h2hbbd.css';
import '../../css/m/mgf3uccoo.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b34h2hbbd"/><path class="mgf3uccoo"/>`,
		"fallback": "formkit:share",
	});
}

export default Component;
