import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e92x5sb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e92x5sb0x"/>`,
		"fallback": "tabler:quotes",
	});
}

export default Component;
