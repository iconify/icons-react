import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzz0u3bga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzz0u3bga"/>`,
		"fallback": "tabler:seeding",
	});
}

export default Component;
