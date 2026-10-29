import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fzlgrtb8q.css';
import '../../css/a/a5_vm_89c.css';
import '../../css/o/oi-opqu9k.css';
import '../../css/w/wq38gndli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fzlgrtb8q"/><path class="a5_vm_89c wm-shadow"/><path class="oi-opqu9k"/><path class="wq38gndli"/></g>`,
		"fallback": "withicons:kalash-engrave",
	});
}

export default Component;
