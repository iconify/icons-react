import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tij7y1zzs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tij7y1zzs"/>`,
		"fallback": "oui:token-key",
	});
}

export default Component;
