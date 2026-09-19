import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aiiejrboy.css';
import '../../css/b/brs6cwbsn.css';
import '../../css/t/txclz031w.css';
import '../../css/d/dbez_pbsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aiiejrboy"/><path class="brs6cwbsn"/><path class="txclz031w"/><path class="dbez_pbsb"/></g>`,
		"fallback": "hugeicons:sprout",
	});
}

export default Component;
