import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw89gnbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw89gnbud"/>`,
		"fallback": "tabler:shield",
	});
}

export default Component;
