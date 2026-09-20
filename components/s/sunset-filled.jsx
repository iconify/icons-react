import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smvh-7b_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smvh-7b_s"/>`,
		"fallback": "tabler:sunset-filled",
	});
}

export default Component;
