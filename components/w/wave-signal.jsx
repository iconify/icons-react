import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzp4q9b6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzp4q9b6t"/>`,
		"fallback": "streamline-sharp:wave-signal",
	});
}

export default Component;
