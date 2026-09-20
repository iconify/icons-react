import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhq33bcqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhq33bcqk"/>`,
		"fallback": "lets-icons:transfer-long-top",
	});
}

export default Component;
