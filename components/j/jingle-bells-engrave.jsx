import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uu73xg15v.css';
import '../../css/s/s0kpqaclm.css';
import '../../css/u/u6upeob_a.css';
import '../../css/z/zvvq9-bxh.css';
import '../../css/l/ll7svlg2u.css';
import '../../css/d/d-isrd9sw.css';
import '../../css/f/fm-m90lxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uu73xg15v wm-k"/><path class="s0kpqaclm wm-a"/><path class="u6upeob_a wm-s"/><path class="wm-shadow zvvq9-bxh"/><path class="ll7svlg2u wm-k"/><path class="d-isrd9sw wm-a"/><path class="fm-m90lxt wm-s"/></g>`,
		"fallback": "withicons:jingle-bells-engrave",
	});
}

export default Component;
