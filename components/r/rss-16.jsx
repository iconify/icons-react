import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n90mr95xf.css';
import '../../css/z/z80svlg0j.css';
import '../../css/d/dzo9b7bid.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n90mr95xf"/><path class="z80svlg0j"/><path class="dzo9b7bid"/>`,
		"fallback": "qlementine-icons:rss-16",
	});
}

export default Component;
