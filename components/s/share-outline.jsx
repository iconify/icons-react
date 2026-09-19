import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxfo8c2li.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gxfo8c2li"/>`,
		"fallback": "glyphs:share-outline",
	});
}

export default Component;
