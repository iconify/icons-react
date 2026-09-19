import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vqxrdfoxw.css';
import '../../css/i/im8zz_bce.css';
import '../../css/e/e958cac3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vqxrdfoxw"/><path class="im8zz_bce"/><path class="e958cac3b"/></g>`,
		"fallback": "hugeicons:message-preview-02",
	});
}

export default Component;
