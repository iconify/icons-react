import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puzu3pbpi.css';
import '../../css/a/a8uztcb9j.css';
import '../../css/n/n1f1jybqz.css';
import '../../css/x/x8u04hbzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puzu3pbpi wm-k"/><path class="a8uztcb9j wm-k"/><path class="n1f1jybqz wm-a"/><path class="wm-k x8u04hbzz"/>`,
		"fallback": "withicons-bauhaus:landmark",
	});
}

export default Component;
