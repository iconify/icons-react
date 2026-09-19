import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wo-qoib4x.css';
import '../../css/w/wyln_uqtp.css';
import '../../css/z/zp28qpbit.css';
import '../../css/s/sknxh3b7i.css';
import '../../css/g/gwt135bcc.css';
import '../../css/a/apmtijbox.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="wo-qoib4x"/><path class="wyln_uqtp"/><path class="zp28qpbit"/><path class="sknxh3b7i"/><path class="gwt135bcc"/><path class="apmtijbox"/></g>`,
		"fallback": "icon-park:transaction-order",
	});
}

export default Component;
