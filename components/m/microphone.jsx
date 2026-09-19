import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w15l-n45q.css';
import '../../css/g/gh_hflztt.css';
import '../../css/i/i9w8h6bmj.css';
import '../../css/r/r_a3bfkac.css';
import '../../css/n/nvc60ltqq.css';
import '../../css/n/n0ph8fbty.css';
import '../../css/v/vo8j-8b6h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w15l-n45q"/><path class="gh_hflztt"/><circle class="i9w8h6bmj"/><path class="r_a3bfkac"/><path class="nvc60ltqq"/><path class="n0ph8fbty"/><ellipse class="vo8j-8b6h"/>`,
		"fallback": "fxemoji:microphone",
	});
}

export default Component;
