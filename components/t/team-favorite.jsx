import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krkxy4b0q.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krkxy4b0q"/>`,
		"fallback": "fluent-mdl2:team-favorite",
	});
}

export default Component;
