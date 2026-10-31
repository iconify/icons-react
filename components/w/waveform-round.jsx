import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi1d2ebjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi1d2ebjr"/>`,
		"fallback": "coolicons:waveform-round",
	});
}

export default Component;
