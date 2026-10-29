import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsbisyb7v.css';
import '../../css/h/hvi2p9brq.css';
import '../../css/g/gowld48ws.css';
import '../../css/n/nf6jvzn5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a xsbisyb7v"/><path class="hvi2p9brq wm-a"/><path class="gowld48ws wm-a"/><path class="nf6jvzn5h wm-a"/>`,
		"fallback": "withicons-bauhaus:pen-tool",
	});
}

export default Component;
