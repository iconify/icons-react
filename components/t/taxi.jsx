import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wrv242m0o.css';
import '../../css/r/r3_63867n.css';
import '../../css/n/ntg56fp1f.css';
import '../../css/z/zretqkbbp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wrv242m0o"/><path class="r3_63867n"/><path clip-rule="evenodd" class="ntg56fp1f"/><path class="zretqkbbp"/></g>`,
		"fallback": "icon-park-outline:taxi",
	});
}

export default Component;
