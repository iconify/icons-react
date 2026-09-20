import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d647met_t.css';
import '../../css/j/ja7t5qg0p.css';

const viewBox = {"width":800,"height":208};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d647met_t"/><path class="ja7t5qg0p"/>`,
		"fallback": "thesvg-color:lincoln-motor-company",
	});
}

export default Component;
