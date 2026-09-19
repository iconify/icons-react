import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8yuibu_s.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8yuibu_s"/>`,
		"fallback": "f7:waveform-path",
	});
}

export default Component;
