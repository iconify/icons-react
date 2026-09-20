import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-jo04stb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v-jo04stb"/>`,
		"fallback": "ix:json-document-filled",
	});
}

export default Component;
