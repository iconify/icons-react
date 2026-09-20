import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wi3cvkb9x.css';
import '../../css/b/b__-pabng.css';
import '../../css/i/ieyk-1btb.css';
import '../../css/w/wf89k6buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wi3cvkb9x"/><path class="b__-pabng"/><path class="ieyk-1btb"/><path class="wf89k6buf"/></g>`,
		"fallback": "solar:upload-twice-square-line-duotone",
	});
}

export default Component;
