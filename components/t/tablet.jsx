import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/njuhqfbuz.css';
import '../../css/o/ojyr-eoas.css';
import '../../css/l/l131tablf.css';
import '../../css/k/ksm4smb3v.css';
import '../../css/u/uoglr5lkr.css';
import '../../css/k/k9vmdph3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="njuhqfbuz wm-shadow"/><path class="ojyr-eoas"/><path class="l131tablf"/><path class="ksm4smb3v"/><path class="uoglr5lkr"/><path class="k9vmdph3l"/></g>`,
		"fallback": "withicons-retro:tablet",
	});
}

export default Component;
