import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx6xpabsn.css';
import '../../css/a/aovmzshjn.css';
import '../../css/a/ab5r28h8z.css';
import '../../css/y/yw8l68yim.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx6xpabsn"/><path class="aovmzshjn"/><path class="ab5r28h8z"/><path class="yw8l68yim"/>`,
		"fallback": "garden:person-list-stroke-20",
	});
}

export default Component;
