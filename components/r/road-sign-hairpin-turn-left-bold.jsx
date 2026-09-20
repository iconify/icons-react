import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss7r9ybtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss7r9ybtf"/>`,
		"fallback": "streamline-ultimate:road-sign-hairpin-turn-left-bold",
	});
}

export default Component;
