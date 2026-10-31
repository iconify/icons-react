import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waxvmfg6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waxvmfg6a"/>`,
		"fallback": "withicons:lucky-coin-gloss",
	});
}

export default Component;
