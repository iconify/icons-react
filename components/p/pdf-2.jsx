import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/li1o8oboq.css';
import '../../css/v/vo56_7bsj.css';
import '../../css/o/owf6whbsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="li1o8oboq"/><path class="vo56_7bsj"/><path class="owf6whbsx"/></g>`,
		"fallback": "proicons:pdf-2",
	});
}

export default Component;
