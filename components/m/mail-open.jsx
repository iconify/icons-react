import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y66sri5vx.css';
import '../../css/a/a53gbue9f.css';
import '../../css/w/w6ndr5bte.css';
import '../../css/v/v_qvqo2tq.css';
import '../../css/w/wryy3v57r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k y66sri5vx"/><path class="a53gbue9f wm-k"/><path class="w6ndr5bte wm-a"/><path class="v_qvqo2tq wm-a"/><path class="wm-k wryy3v57r"/>`,
		"fallback": "withicons-bauhaus:mail-open",
	});
}

export default Component;
