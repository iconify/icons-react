import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly6jl_bkj.css';
import '../../css/c/ctq1g0i4q.css';
import '../../css/r/rfbkvllim.css';
import '../../css/k/kji-ofbyx.css';
import '../../css/t/tmpm_6byj.css';
import '../../css/h/h9t6l4bmz.css';
import '../../css/p/pb7vd9b3l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ly6jl_bkj"><path class="ctq1g0i4q"/><path class="rfbkvllim"/><path class="kji-ofbyx"/><circle class="tmpm_6byj"/><circle class="h9t6l4bmz"/><circle class="pb7vd9b3l"/></g>`,
		"fallback": "icon-park:list-one",
	});
}

export default Component;
