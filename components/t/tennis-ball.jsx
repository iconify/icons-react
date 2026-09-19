import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d6hkj8bdh.css';
import '../../css/w/wdmvt9bcj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="d6hkj8bdh"/><path class="wdmvt9bcj"/></g>`,
		"fallback": "glyphs:tennis-ball",
	});
}

export default Component;
