import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vph9adcft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vph9adcft"/>`,
		"fallback": "iconamoon:shield-no-fill",
	});
}

export default Component;
