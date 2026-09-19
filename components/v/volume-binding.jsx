import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6dafjbul.css';
import '../../css/w/wrevi32si.css';
import '../../css/b/btx35_8hm.css';
import '../../css/a/ah1zjobhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6dafjbul"/><circle class="wrevi32si"/><path class="btx35_8hm"/><path class="ah1zjobhm"/>`,
		"fallback": "eos-icons:volume-binding",
	});
}

export default Component;
