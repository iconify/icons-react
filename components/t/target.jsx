import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vttvgz3jw.css';
import '../../css/j/jgo86ngtk.css';
import '../../css/q/qvna00d1i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vttvgz3jw"/><path class="jgo86ngtk"/><path class="qvna00d1i"/></g>`,
		"fallback": "glyphs:target",
	});
}

export default Component;
