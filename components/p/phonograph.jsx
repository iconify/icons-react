import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptphydo2o.css';
import '../../css/y/yhhga6boj.css';
import '../../css/y/ydr3m1shw.css';
import '../../css/p/plm38chdi.css';
import '../../css/z/zzkg6ftdb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ptphydo2o"/><circle class="yhhga6boj"/><rect class="ydr3m1shw"/><rect class="plm38chdi"/><path class="zzkg6ftdb"/></g>`,
		"fallback": "icon-park:phonograph",
	});
}

export default Component;
