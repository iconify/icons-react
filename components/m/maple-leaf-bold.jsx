import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo5-_oboc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qo5-_oboc"/>`,
		"fallback": "glyphs:maple-leaf-bold",
	});
}

export default Component;
