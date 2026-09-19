import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/g/gvwzbcc6a.css';
import '../../css/u/u3czx2-4f.css';
import '../../css/g/gatnvbbxy.css';
import '../../css/a/a12qccc1u.css';
import '../../css/b/bvmag0xgc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="gvwzbcc6a"/><path class="u3czx2-4f"/><path class="gatnvbbxy"/><circle class="a12qccc1u"/><circle class="bvmag0xgc"/></g>`,
		"fallback": "icon-park:makeups",
	});
}

export default Component;
