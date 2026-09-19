import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/castx7b-i.css';
import '../../css/k/kxk1ljbls.css';
import '../../css/l/lwk02zbcd.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="castx7b-i"/><path class="kxk1ljbls"/><path class="lwk02zbcd"/></g>`,
		"fallback": "si-glyph:mail-send",
	});
}

export default Component;
