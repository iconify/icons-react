import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vept4ccvn.css';
import '../../css/b/bsvw6huwc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vept4ccvn"/><path class="bsvw6huwc"/></g>`,
		"fallback": "glyphs:lightning-1-bold",
	});
}

export default Component;
