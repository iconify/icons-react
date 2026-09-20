import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqax-6b-d.css';
import '../../css/k/kppe_kh7g.css';
import '../../css/h/hvrjix_hn.css';
import '../../css/k/ko3k3-g7k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jqax-6b-d"><path class="kppe_kh7g"/><path class="hvrjix_hn"/><path class="ko3k3-g7k"/></g>`,
		"fallback": "streamline-plump:script-2",
	});
}

export default Component;
