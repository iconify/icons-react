import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9r9x7bay.css';
import '../../css/y/y3q6sjb4w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9r9x7bay"/><path class="y3q6sjb4w"/>`,
		"fallback": "devicon:numpy",
	});
}

export default Component;
