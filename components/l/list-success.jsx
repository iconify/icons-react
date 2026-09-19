import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/ul-6me-st.css';
import '../../css/y/yx1oo1bfe.css';
import '../../css/c/czrcyyb3k.css';
import '../../css/a/a-qkwdp1e.css';
import '../../css/t/tgy9b5b4p.css';
import '../../css/b/b-txz89oa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ul-6me-st"/><path class="yx1oo1bfe"/><path class="czrcyyb3k"/><circle class="a-qkwdp1e"/><circle class="tgy9b5b4p"/><path class="b-txz89oa"/></g>`,
		"fallback": "icon-park:list-success",
	});
}

export default Component;
