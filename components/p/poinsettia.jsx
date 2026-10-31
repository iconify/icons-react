import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k6ddl4-3y.css';
import '../../css/n/nqhv45btf.css';
import '../../css/o/ot1jgbxnf.css';
import '../../css/l/lxhs2bcmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k6ddl4-3y wm-shadow"/><path class="nqhv45btf"/><path class="ot1jgbxnf wm-s"/><path class="lxhs2bcmz"/></g>`,
		"fallback": "withicons-retro:poinsettia",
	});
}

export default Component;
