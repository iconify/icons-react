import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzn7-dlcm.css';
import '../../css/b/b05aznmzt.css';
import '../../css/z/zaa61-bad.css';
import '../../css/p/peafvdb2k.css';
import '../../css/o/ow_q8gbwd.css';
import '../../css/p/pfx6v_myu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bzn7-dlcm"/><path class="b05aznmzt"/><path class="zaa61-bad"/><path class="peafvdb2k"/><path class="ow_q8gbwd"/><path class="pfx6v_myu"/></g>`,
		"fallback": "streamline-ultimate-color:newspaper-fold",
	});
}

export default Component;
