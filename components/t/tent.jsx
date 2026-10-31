import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gmwlybbaz.css';
import '../../css/w/wylacdb1e.css';
import '../../css/d/da3gmy8zl.css';
import '../../css/t/ta0ef9khb.css';
import '../../css/l/lht6sjihy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="gmwlybbaz wm-shadow"/><path class="wm-shadow wylacdb1e"/><path class="da3gmy8zl"/><path class="ta0ef9khb"/><path class="lht6sjihy"/></g>`,
		"fallback": "withicons-brutal:tent",
	});
}

export default Component;
