import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/m/mz7fznv6n.css';
import '../../css/m/mzh0lfbpa.css';
import '../../css/j/jcgtg9nlx.css';
import '../../css/t/toc75ln9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="mz7fznv6n"/><path class="mzh0lfbpa"/><path class="jcgtg9nlx"/><path class="toc75ln9k"/></g>`,
		"fallback": "lets-icons:time-del-light",
	});
}

export default Component;
