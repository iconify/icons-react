import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is--5bbuk.css';
import '../../css/l/lkmselk-n.css';
import '../../css/l/lsxdb1s3e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="is--5bbuk"/><path class="lkmselk-n"/><path class="lsxdb1s3e"/>`,
		"fallback": "ooui:special-pages-ltr",
	});
}

export default Component;
