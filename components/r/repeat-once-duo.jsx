import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xbd7lobfc.css';
import '../../css/y/yhs7tmz9s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xbd7lobfc"/><path class="yhs7tmz9s"/></g>`,
		"fallback": "glyphs:repeat-once-duo",
	});
}

export default Component;
