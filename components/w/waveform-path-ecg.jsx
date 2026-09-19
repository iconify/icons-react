import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_nz6x7vn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_nz6x7vn"/>`,
		"fallback": "f7:waveform-path-ecg",
	});
}

export default Component;
