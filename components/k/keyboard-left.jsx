import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ro0m_nbje.css';
import '../../css/v/v73q-8bws.css';
import '../../css/s/sqmgmbbch.css';
import '../../css/a/ahungkbjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ro0m_nbje"/><path class="v73q-8bws"/><path class="sqmgmbbch"/><path class="ahungkbjh"/></g>`,
		"fallback": "andrsrxn:keyboard-left",
	});
}

export default Component;
