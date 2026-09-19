import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlfi_1iqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlfi_1iqk"/>`,
		"fallback": "eos-icons:secure-data",
	});
}

export default Component;
