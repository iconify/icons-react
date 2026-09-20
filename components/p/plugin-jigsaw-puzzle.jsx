import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/inftpnbxr.css';
import '../../css/w/wh1_e-bqz.css';
import '../../css/s/styllzb0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="inftpnbxr"/><path class="wh1_e-bqz"/><path class="styllzb0p"/></g>`,
		"fallback": "streamline-freehand-color:plugin-jigsaw-puzzle",
	});
}

export default Component;
