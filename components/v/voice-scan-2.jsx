import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm7_nacmv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm7_nacmv"/>`,
		"fallback": "streamline-flex-color:voice-scan-2",
	});
}

export default Component;
