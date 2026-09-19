import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bak9dbcyq.css';

const viewBox = {"width":507,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bak9dbcyq"/>`,
		"fallback": "file-icons:microsoft-outlook",
	});
}

export default Component;
