import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/c/c7vp9yj-i.css';
import '../../css/y/ymn18bcnu.css';
import '../../css/l/l5_v93xsj.css';
import '../../css/d/djr3_db2n.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="c7vp9yj-i"/><path class="ymn18bcnu"/><path clip-rule="evenodd" class="l5_v93xsj"/><path clip-rule="evenodd" class="djr3_db2n"/></g>`,
		"fallback": "skill-icons:tauri-dark",
	});
}

export default Component;
