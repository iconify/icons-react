import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npzehtboi.css';
import '../../css/o/o887d5btn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="npzehtboi"/><path class="o887d5btn"/>`,
		"fallback": "streamline-plump:suitcase-rolling-solid",
	});
}

export default Component;
