import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzlv41b4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzlv41b4a"/>`,
		"fallback": "tabler:vip",
	});
}

export default Component;
