import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2e61izjw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2e61izjw"/>`,
		"fallback": "f7:waveform-path-badge-plus",
	});
}

export default Component;
