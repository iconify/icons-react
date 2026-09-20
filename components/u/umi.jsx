import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmd703bsy.css';
import '../../css/b/bo6v6ta7j.css';
import '../../css/i/i3j9e1bru.css';
import '../../css/y/ygkkwbbxv.css';
import '../../css/w/wj4kgr0on.css';
import '../../css/x/xitx2actf.css';
import '../../css/l/lf3apq3sc.css';
import '../../css/v/vl2bs-ezb.css';
import '../../css/c/c6aqgmexe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmd703bsy"/><path class="bo6v6ta7j"/><path class="i3j9e1bru"/><g class="ygkkwbbxv"><g class="wj4kgr0on"><circle class="xitx2actf"/><circle class="lf3apq3sc"/><circle class="vl2bs-ezb"/></g><path class="c6aqgmexe"/></g>`,
		"fallback": "material-icon-theme:umi",
	});
}

export default Component;
