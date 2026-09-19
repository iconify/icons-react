import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sy7-dkoxi.css';
import '../../css/z/zgd3ifl6g.css';
import '../../css/v/vha_0-yte.css';
import '../../css/j/j2t_tubbx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sy7-dkoxi"/><path class="zgd3ifl6g"/><path class="vha_0-yte"/><circle class="j2t_tubbx"/></g>`,
		"fallback": "icon-park:kitchen-knife",
	});
}

export default Component;
