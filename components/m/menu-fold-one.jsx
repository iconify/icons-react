import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/d/d7eu1_b8t.css';
import '../../css/d/dds2nibls.css';
import '../../css/x/xgrraabkr.css';
import '../../css/g/gv3k4fbqf.css';
import '../../css/z/zkwsyactc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="d7eu1_b8t"/><path class="dds2nibls"/><path class="xgrraabkr"/><path class="gv3k4fbqf"/><path class="zkwsyactc"/></g>`,
		"fallback": "icon-park:menu-fold-one",
	});
}

export default Component;
