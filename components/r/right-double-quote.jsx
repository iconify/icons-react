import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpj6p9orf.css';

const viewBox = {"width":875,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpj6p9orf"/>`,
		"fallback": "fluent-mdl2:right-double-quote",
	});
}

export default Component;
