import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pni0gvbny.css';
import '../../css/x/xp16_pb1c.css';
import '../../css/q/q4wbkvbqy.css';

const viewBox = {"width":1077,"height":220};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pni0gvbny"><path class="xp16_pb1c"/><path clip-rule="evenodd" class="q4wbkvbqy"/></g>`,
		"fallback": "thesvg-color:pinecone",
	});
}

export default Component;
