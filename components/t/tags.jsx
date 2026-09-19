import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrrg9d2my.css';
import '../../css/y/yxxk2yx8a.css';
import '../../css/l/lb6m3_zjp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrrg9d2my"/><path class="yxxk2yx8a"/><path class="lb6m3_zjp"/>`,
		"fallback": "cil:tags",
	});
}

export default Component;
