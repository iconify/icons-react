import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmh4fhb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmh4fhb6b"/>`,
		"fallback": "streamline-ultimate:radiology-scan-doctor-bold",
	});
}

export default Component;
