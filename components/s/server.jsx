import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wivz2ubig.css';
import '../../css/x/x9ouswbsm.css';
import '../../css/l/l5pzcjbzi.css';
import '../../css/o/oavu7zbfy.css';
import '../../css/w/wv6qi4b6b.css';
import '../../css/t/triu5ihtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wivz2ubig wm-k"/><path class="wm-a x9ouswbsm"/><path class="l5pzcjbzi wm-a"/><path class="oavu7zbfy wm-k"/><path class="wm-a wv6qi4b6b"/><path class="triu5ihtd wm-a"/>`,
		"fallback": "withicons-bauhaus:server",
	});
}

export default Component;
