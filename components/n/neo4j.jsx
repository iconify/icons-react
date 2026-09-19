import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vse78tblg.css';

const viewBox = {"width":459,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vse78tblg"/>`,
		"fallback": "file-icons:neo4j",
	});
}

export default Component;
