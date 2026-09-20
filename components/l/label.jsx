import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oinc0gbvg.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oinc0gbvg"/>`,
		"fallback": "memory:label",
	});
}

export default Component;
