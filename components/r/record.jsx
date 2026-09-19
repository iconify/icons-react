import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/o5t226bvr.css';
import '../../css/d/ddygjdbod.css';
import '../../css/h/ha53tcbge.css';
import '../../css/c/cuu9dts4z.css';
import '../../css/x/xctod_4ic.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4tyNJcYu"><g class="ufeehvblu"><rect class="o5t226bvr"/><path class="ddygjdbod"/><path class="ha53tcbge"/><path class="cuu9dts4z"/><path class="xctod_4ic"/></g></mask></defs><path mask="url(#SVG4tyNJcYu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:record",
	});
}

export default Component;
