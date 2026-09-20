import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scsbkobgd.css';
import '../../css/r/ro_92tjwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scsbkobgd"/><path class="ro_92tjwj"/>`,
		"fallback": "tdesign:logo-tbeacon-filled",
	});
}

export default Component;
