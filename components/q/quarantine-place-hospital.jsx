import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh_af3ezb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh_af3ezb"/>`,
		"fallback": "covid:quarantine-place-hospital",
	});
}

export default Component;
