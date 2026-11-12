import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueyhp9s-v.css';
import '../../css/u/u323u8bnq.css';
import '../../css/c/cdjzimb7l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueyhp9s-v"/><path class="u323u8bnq"/><path class="cdjzimb7l"/>`,
		"fallback": "selfhst:ksuite-kmeet-dark",
	});
}

export default Component;
