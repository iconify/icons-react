import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j4azcmbmn.css';
import '../../css/z/zkzlsfinm.css';
import '../../css/q/qrvjajb4i.css';
import '../../css/t/thwemd3eh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7ZqDlbpX"><g class="ft5dv1b6b"><path class="j4azcmbmn"/><rect class="zkzlsfinm"/><path class="qrvjajb4i"/><circle class="thwemd3eh"/></g></mask></defs><path mask="url(#SVG7ZqDlbpX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:master",
	});
}

export default Component;
