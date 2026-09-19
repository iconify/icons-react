import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cznv3j3vk.css';
import '../../css/c/cztd4kitm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cznv3j3vk"/><path class="cztd4kitm"/></g>`,
		"fallback": "glyphs:pencil-paintbrush-bold",
	});
}

export default Component;
