import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw_pdhz4z.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw_pdhz4z"/>`,
		"fallback": "f7:waveform-circle-fill",
	});
}

export default Component;
