import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eozc8fbep.css';
import '../../css/l/lsxdb1s3e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eozc8fbep"/><path class="lsxdb1s3e"/>`,
		"fallback": "ooui:reference-existing-ltr",
	});
}

export default Component;
