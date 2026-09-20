import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz7h7p0mm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz7h7p0mm"/>`,
		"fallback": "tdesign:measurement-2-filled",
	});
}

export default Component;
