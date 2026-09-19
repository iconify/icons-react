import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/q/qy5hs86sc.css';
import '../../css/n/n7wgw62ui.css';
import '../../css/l/lojv2fbzf.css';
import '../../css/t/tvmjk0b5t.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="qy5hs86sc"/><path class="n7wgw62ui"/><path class="lojv2fbzf"/></g><path class="tvmjk0b5t"/>`,
		"fallback": "flag:sn-4x3",
	});
}

export default Component;
