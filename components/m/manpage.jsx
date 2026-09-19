import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbsf62b3k.css';
import '../../css/p/pwvlvn-7d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbsf62b3k"/><path class="pwvlvn-7d"/>`,
		"fallback": "file-icons:manpage",
	});
}

export default Component;
