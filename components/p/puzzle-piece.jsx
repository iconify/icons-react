import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hf6sut7gr.css';
import '../../css/i/i_kgz0bew.css';
import '../../css/y/yb5mmzb2r.css';
import '../../css/m/mz5zz4bpw.css';
import '../../css/c/ccdfeub5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hf6sut7gr wm-shadow"/><path class="i_kgz0bew"/><path class="yb5mmzb2r"/><path class="mz5zz4bpw"/><path class="ccdfeub5i"/></g>`,
		"fallback": "withicons-retro:puzzle-piece",
	});
}

export default Component;
