import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/h/huth-8c1f.css';
import '../../css/v/vd4qirmma.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="huth-8c1f"/><path class="vd4qirmma"/></g>`,
		"fallback": "glyphs:stream",
	});
}

export default Component;
