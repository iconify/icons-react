import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s70-klbjy.css';
import '../../css/q/q983_4ola.css';
import '../../css/r/r2brknb5j.css';
import '../../css/c/catmufxid.css';
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
		"content": `<path class="s70-klbjy"/><circle class="q983_4ola"/><circle class="r2brknb5j"/><path class="catmufxid"/><circle class="kooj9t3kh"/><circle class="qapkbmmbw"/>`,
		"fallback": "thesvg-color:the-lounge-dark",
	});
}

export default Component;
