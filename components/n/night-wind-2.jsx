import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0x3p_9pd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0x3p_9pd"/>`,
		"fallback": "streamline-cyber:night-wind-2",
	});
}

export default Component;
