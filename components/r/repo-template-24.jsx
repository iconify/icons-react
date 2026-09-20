import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibcf01c0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibcf01c0j"/>`,
		"fallback": "octicon:repo-template-24",
	});
}

export default Component;
