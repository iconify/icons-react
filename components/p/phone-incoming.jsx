import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx-bgzb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx-bgzb5n"/>`,
		"fallback": "tabler:phone-incoming",
	});
}

export default Component;
