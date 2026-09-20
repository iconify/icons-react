import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7louet6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7louet6a"/>`,
		"fallback": "tabler:skateboard",
	});
}

export default Component;
