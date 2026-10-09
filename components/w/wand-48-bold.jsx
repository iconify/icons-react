import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfqb5ccjd.css';
import '../../css/x/xh7-42bhx.css';
import '../../css/t/tk2wtebhl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfqb5ccjd"/><path class="xh7-42bhx"/><path class="tk2wtebhl"/>`,
		"fallback": "energy-icons:wand-48-bold",
	});
}

export default Component;
