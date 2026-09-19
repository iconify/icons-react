import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyqfzub1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oyqfzub1j"/>`,
		"fallback": "griddy-icons:link-broken-alt-02",
	});
}

export default Component;
