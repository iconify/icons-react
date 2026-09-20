import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uwalt-_fs.css';
import '../../css/l/l556_r3_t.css';
import '../../css/n/nzs70z7ln.css';
import '../../css/f/fm2ip7bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="uwalt-_fs"/><path class="l556_r3_t"/><path class="nzs70z7ln"/><path class="fm2ip7bkn"/></g>`,
		"fallback": "streamline-freehand-color:programming-language-script-lock",
	});
}

export default Component;
