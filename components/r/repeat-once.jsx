import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ob5s_4bkl.css';
import '../../css/t/tgkgdc5qi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ob5s_4bkl"/><path class="tgkgdc5qi"/></g>`,
		"fallback": "glyphs:repeat-once",
	});
}

export default Component;
