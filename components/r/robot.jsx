import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/upc9rwb2q.css';
import '../../css/y/yxbgip_8v.css';
import '../../css/i/iddbgmb0g.css';
import '../../css/g/gqsh2ybei.css';
import '../../css/x/xmy9v5k8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="upc9rwb2q"/><circle class="yxbgip_8v"/><circle class="iddbgmb0g"/><circle class="gqsh2ybei"/><path class="xmy9v5k8f"/></g>`,
		"fallback": "meteor-icons:robot",
	});
}

export default Component;
