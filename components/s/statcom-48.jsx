import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfo3vbvre.css';
import '../../css/e/e97k-1bwc.css';
import '../../css/c/c5w4qye8l.css';
import '../../css/z/ztfqk7bza.css';
import '../../css/k/kfi_5kxrj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfo3vbvre"/><path class="e97k-1bwc"/><path class="c5w4qye8l"/><path class="ztfqk7bza"/><path class="kfi_5kxrj"/>`,
		"fallback": "energy-icons:statcom-48",
	});
}

export default Component;
