import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8db5jj_i.css';
import '../../css/s/sw929ezvp.css';
import '../../css/n/n1v3c_bsy.css';
import '../../css/c/crbo13bgz.css';
import '../../css/v/vtzwnx26t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8db5jj_i"/><path class="sw929ezvp"/><path class="n1v3c_bsy"/><path class="crbo13bgz"/><path class="vtzwnx26t"/>`,
		"fallback": "selfhst:nps-enhanced-dark",
	});
}

export default Component;
