import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpe_ei1ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpe_ei1ho"/>`,
		"fallback": "tabler:subtitles-ai",
	});
}

export default Component;
