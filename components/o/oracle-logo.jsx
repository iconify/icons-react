import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fngcuz2gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fngcuz2gm"/>`,
		"fallback": "streamline-logos:oracle-logo",
	});
}

export default Component;
