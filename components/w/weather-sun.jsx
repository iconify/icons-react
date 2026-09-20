import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crh91xb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crh91xb0l"/>`,
		"fallback": "streamline-ultimate:weather-sun",
	});
}

export default Component;
