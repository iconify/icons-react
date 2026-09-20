import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkm2jfh8m.css';
import '../../css/j/j2a76tb0l.css';
import '../../css/z/zurq1_b3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkm2jfh8m"/><path class="j2a76tb0l"/><path class="zurq1_b3y"/>`,
		"fallback": "streamline-freehand:security-gdpr-browser",
	});
}

export default Component;
