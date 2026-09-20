import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ick8o1b-y.css';
import '../../css/a/a-4dztb1w.css';
import '../../css/p/px8jwptjy.css';
import '../../css/v/vnmkxmasi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ick8o1b-y"/><path class="a-4dztb1w"/><path class="px8jwptjy"/><path class="vnmkxmasi"/></g>`,
		"fallback": "solar:lamp-broken",
	});
}

export default Component;
