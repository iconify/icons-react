import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moc26lgsm.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moc26lgsm"/>`,
		"fallback": "f7:waveform-path-badge-minus",
	});
}

export default Component;
