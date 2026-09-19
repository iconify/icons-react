import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wrsp52b-t.css';
import '../../css/v/vs-u38b6o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wrsp52b-t"/><path class="vs-u38b6o"/></g>`,
		"fallback": "glyphs-poly:lightning-1",
	});
}

export default Component;
