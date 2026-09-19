import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/t/t88ucmevx.css';
import '../../css/u/uic0twb5e.css';
import '../../css/g/gu5w8ubhl.css';
import '../../css/j/jlovkrb8y.css';
import '../../css/d/dbzjpub8f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="t88ucmevx"/><path class="uic0twb5e"/><path class="gu5w8ubhl"/><path class="jlovkrb8y"/><path class="dbzjpub8f"/></g>`,
		"fallback": "icon-park:tv-one",
	});
}

export default Component;
