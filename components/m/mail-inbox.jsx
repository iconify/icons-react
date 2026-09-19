import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e_shtx8ok.css';
import '../../css/k/kxk1ljbls.css';
import '../../css/e/eko1wqb5i.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="e_shtx8ok"/><path class="kxk1ljbls"/><path class="eko1wqb5i"/></g>`,
		"fallback": "si-glyph:mail-inbox",
	});
}

export default Component;
