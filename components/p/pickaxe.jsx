import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wk9zspb8b.css';
import '../../css/h/hmttw_nrc.css';
import '../../css/i/iqrpfub-f.css';
import '../../css/v/vtudi687p.css';
import '../../css/a/awblbp88e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wk9zspb8b wm-shadow"/><path class="hmttw_nrc wm-shadow"/><path class="iqrpfub-f"/><path class="vtudi687p"/><path class="awblbp88e"/></g>`,
		"fallback": "withicons-brutal:pickaxe",
	});
}

export default Component;
