import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shshedbqf.css';
import '../../css/o/og1rmsw3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shshedbqf"/><path clip-rule="evenodd" class="og1rmsw3t"/>`,
		"fallback": "lets-icons:shop",
	});
}

export default Component;
