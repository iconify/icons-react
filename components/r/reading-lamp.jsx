import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyerzhc-f.css';
import '../../css/t/t6lf1fb-h.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyerzhc-f"/><path class="t6lf1fb-h"/>`,
		"fallback": "ep:reading-lamp",
	});
}

export default Component;
