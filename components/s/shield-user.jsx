import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knevdtbla.css';
import '../../css/x/xvp3v8omv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knevdtbla"/><path class="xvp3v8omv"/>`,
		"fallback": "stash:shield-user",
	});
}

export default Component;
