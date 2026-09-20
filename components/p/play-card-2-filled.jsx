import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo-q_sb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo-q_sb2f"/>`,
		"fallback": "tabler:play-card-2-filled",
	});
}

export default Component;
