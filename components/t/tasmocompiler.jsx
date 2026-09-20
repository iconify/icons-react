import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xghsn32in.css';
import '../../css/h/hjo06mb_f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xghsn32in"/><path class="hjo06mb_f"/>`,
		"fallback": "selfhst:tasmocompiler",
	});
}

export default Component;
