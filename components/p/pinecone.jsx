import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlxfrac8y.css';

const viewBox = {"width":220,"height":220};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qlxfrac8y"/>`,
		"fallback": "thesvg:pinecone",
	});
}

export default Component;
