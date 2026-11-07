import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7ilcxb3j.css';
import '../../css/p/prq9nybvi.css';
import '../../css/e/exlutqbvg.css';
import '../../css/s/s64hpnbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7ilcxb3j"/><path class="prq9nybvi"/><path class="exlutqbvg"/><path clip-rule="evenodd" class="s64hpnbks"/>`,
		"fallback": "solar:lock-password-outline",
	});
}

export default Component;
