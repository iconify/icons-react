import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2oawlg-q.css';
import '../../css/z/z7_88imtg.css';
import '../../css/z/zbidebcoj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2oawlg-q"/><path class="z7_88imtg"/><path class="zbidebcoj"/>`,
		"fallback": "energy-icons:key-round-48-bold",
	});
}

export default Component;
