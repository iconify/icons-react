import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqod05bbx.css';
import '../../css/l/lo6iqdbgl.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqod05bbx"/><path class="lo6iqdbgl"/>`,
		"fallback": "devicon:systemd",
	});
}

export default Component;
