import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/zcwckgb0f.css';
import '../../css/t/t_-82ebai.css';
import '../../css/d/drzfh_7tx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGR0pUgrTX"><g class="v3_i3wktz"><path class="zcwckgb0f"/><path class="t_-82ebai"/><path class="drzfh_7tx"/></g></mask></defs><path mask="url(#SVGR0pUgrTX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:table-report",
	});
}

export default Component;
