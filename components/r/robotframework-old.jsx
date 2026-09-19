import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofs7f2bmg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofs7f2bmg"/>`,
		"fallback": "file-icons:robotframework-old",
	});
}

export default Component;
