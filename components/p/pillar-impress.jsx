import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg_meg-on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg_meg-on"/>`,
		"fallback": "cbi:pillar-impress",
	});
}

export default Component;
