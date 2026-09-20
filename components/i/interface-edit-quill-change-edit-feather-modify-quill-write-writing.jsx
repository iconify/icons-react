import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xknjhfb5n.css';
import '../../css/r/rfzwtk2lg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xknjhfb5n"/><path class="rfzwtk2lg"/></g>`,
		"fallback": "streamline:interface-edit-quill-change-edit-feather-modify-quill-write-writing",
	});
}

export default Component;
