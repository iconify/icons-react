import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is3xbuo4a.css';
import '../../css/a/a6vuirsuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="is3xbuo4a"/><path class="a6vuirsuo"/>`,
		"fallback": "boxicons:trash-x",
	});
}

export default Component;
