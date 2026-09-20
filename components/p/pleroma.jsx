import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is_bib.css';
import '../../css/y/ydovum.css';
import '../../css/r/rek8ly.css';
import '../../css/d/d_veic.css';
import '../../css/d/d-g-t0ye.css';
import '../../css/d/d-u2wfvb.css';
import '../../css/d/d-tpcgta.css';
import '../../css/d/d-y53qgi.css';
import '../../css/d/d-ysi9rn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="is_bib ydovum"/><path class="rek8ly ydovum"/><path class="d_veic ydovum"/>`,
		"fallback": "line-md:pleroma",
	});
}

export default Component;
