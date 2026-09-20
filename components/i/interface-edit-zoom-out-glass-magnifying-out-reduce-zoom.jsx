import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qv0qcew3v.css';
import '../../css/v/vx03_sb_w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="qv0qcew3v"/><path class="vx03_sb_w"/></g>`,
		"fallback": "streamline:interface-edit-zoom-out-glass-magnifying-out-reduce-zoom",
	});
}

export default Component;
