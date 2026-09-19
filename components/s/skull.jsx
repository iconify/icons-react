import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/buty0cbpv.css';
import '../../css/u/ui9l-cbsg.css';
import '../../css/b/bwvy2807h.css';
import '../../css/d/dveccebkq.css';
import '../../css/a/an01rw98p.css';
import '../../css/h/h60yxogzx.css';
import '../../css/a/ajj360i3e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="buty0cbpv"/><path class="ui9l-cbsg"/><path class="bwvy2807h"/><path class="dveccebkq"/><path class="an01rw98p"/><path class="h60yxogzx"/><path class="ajj360i3e"/></g>`,
		"fallback": "icon-park:skull",
	});
}

export default Component;
