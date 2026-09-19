import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zst90ruth.css';
import '../../css/a/as4kjjols.css';
import '../../css/w/wukmxv92r.css';
import '../../css/j/j538h6btm.css';
import '../../css/k/khxsrrbjw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="zst90ruth"/><path class="as4kjjols"/><circle class="wukmxv92r"/><circle class="j538h6btm"/><path class="khxsrrbjw"/></g>`,
		"fallback": "icon-park:steoller",
	});
}

export default Component;
