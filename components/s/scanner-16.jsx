import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkh1ubbwh.css';
import '../../css/n/nzqt12bbz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lkh1ubbwh"/><path clip-rule="evenodd" class="nzqt12bbz"/>`,
		"fallback": "qlementine-icons:scanner-16",
	});
}

export default Component;
