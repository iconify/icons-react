import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oyfnvpbby.css';
import '../../css/n/ns_h8cc3w.css';
import '../../css/j/jy8aa6zrm.css';
import '../../css/n/n__74pb6t.css';
import '../../css/o/oy16wm8nc.css';
import '../../css/e/egb5y1bsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="oyfnvpbby wm-shadow"/><path class="ns_h8cc3w"/><path class="jy8aa6zrm"/><path class="n__74pb6t"/><path class="oy16wm8nc"/><path class="egb5y1bsw"/></g>`,
		"fallback": "withicons-retro:pencil",
	});
}

export default Component;
