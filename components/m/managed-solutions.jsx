import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzwywtzpa.css';
import '../../css/x/xvq7pg0gd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzwywtzpa"/><path class="xvq7pg0gd"/>`,
		"fallback": "carbon:managed-solutions",
	});
}

export default Component;
