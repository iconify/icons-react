import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1x2-08ga.css';
import '../../css/z/zzq0s9bak.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1x2-08ga"/><path class="zzq0s9bak"/>`,
		"fallback": "ion:trash-b",
	});
}

export default Component;
