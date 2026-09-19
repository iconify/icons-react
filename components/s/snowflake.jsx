import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zy3_mub6w.css';
import '../../css/s/sm0wspbln.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zy3_mub6w"/><path class="sm0wspbln"/></g>`,
		"fallback": "glyphs:snowflake",
	});
}

export default Component;
