import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ame5gh01i.css';

const viewBox = {"width":2304,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ame5gh01i"/>`,
		"fallback": "fa:motorcycle",
	});
}

export default Component;
