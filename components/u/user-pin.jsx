import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_akupb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_akupb7p"/>`,
		"fallback": "tabler:user-pin",
	});
}

export default Component;
