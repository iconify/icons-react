import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4so3qlya.css';
import '../../css/l/lsxdb1s3e.css';
import '../../css/c/cyj7fswlr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4so3qlya"/><path class="lsxdb1s3e"/><circle class="cyj7fswlr"/>`,
		"fallback": "ooui:user-pages-ltr",
	});
}

export default Component;
