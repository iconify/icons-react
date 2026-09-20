import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx3v_ob6p.css';
import '../../css/k/ku8imqgff.css';
import '../../css/u/uxn5tubya.css';
import '../../css/y/ytt5v7b4i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx3v_ob6p"/><path class="ku8imqgff"/><path class="uxn5tubya"/><path class="ytt5v7b4i"/>`,
		"fallback": "selfhst:ksuite-swisstransfer",
	});
}

export default Component;
