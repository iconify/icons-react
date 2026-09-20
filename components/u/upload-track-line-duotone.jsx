import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s8y023b0u.css';
import '../../css/p/pknklcb3b.css';
import '../../css/t/tqfsqjbfu.css';
import '../../css/n/n-y7-h-tz.css';
import '../../css/d/doy9q4b5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s8y023b0u"/><path class="pknklcb3b"/><path class="tqfsqjbfu"/><path class="n-y7-h-tz"/><circle class="doy9q4b5f"/></g>`,
		"fallback": "solar:upload-track-line-duotone",
	});
}

export default Component;
