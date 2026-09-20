import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlk0loasq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlk0loasq"/>`,
		"fallback": "mdi:thermometer-probe",
	});
}

export default Component;
