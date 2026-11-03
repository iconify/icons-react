import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s70-klbjy.css';
import '../../css/o/o5ainlbbc.css';
import '../../css/d/dzixascez.css';
import '../../css/c/cd7c3hbtx.css';
import '../../css/k/kooj9t3kh.css';
import '../../css/q/qapkbmmbw.css';

const viewBox = {"width":386,"height":276};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s70-klbjy"/><circle class="o5ainlbbc"/><circle class="dzixascez"/><path class="cd7c3hbtx"/><circle class="kooj9t3kh"/><circle class="qapkbmmbw"/>`,
		"fallback": "thesvg-color:the-lounge-light",
	});
}

export default Component;
