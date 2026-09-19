import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gshe_di8n.css';
import '../../css/s/s1q8lcb1s.css';
import '../../css/i/ifwem2bpq.css';
import '../../css/x/xuh70gfac.css';
import '../../css/u/un96hmbbz.css';
import '../../css/r/r_oxw7o-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gshe_di8n"/><path class="s1q8lcb1s"/><path class="ifwem2bpq"/><path class="xuh70gfac"/><path class="un96hmbbz"/><path class="r_oxw7o-c"/>`,
		"fallback": "fontisto:mad",
	});
}

export default Component;
