import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmjd7wbda.css';

const viewBox = {"width":96,"height":96};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xmjd7wbda"/>`,
		"fallback": "cryptocurrency:kmd",
	});
}

export default Component;
