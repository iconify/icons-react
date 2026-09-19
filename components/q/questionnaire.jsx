import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj7jp6vjo.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj7jp6vjo"/>`,
		"fallback": "fluent-mdl2:questionnaire",
	});
}

export default Component;
