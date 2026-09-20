import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/s_n95ss7m.css';
import '../../css/p/p7x4debfp.css';
import '../../css/h/hyzgvfpti.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="s_n95ss7m"/><path class="p7x4debfp"/><path class="hyzgvfpti"/></g>`,
		"fallback": "streamline-plump:lock-comment-security",
	});
}

export default Component;
