import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avc-ejbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avc-ejbry"/>`,
		"fallback": "streamline-sharp-color:wave-signal",
	});
}

export default Component;
