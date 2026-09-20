import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu-nt_zvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu-nt_zvc"/>`,
		"fallback": "mdi:numeric-3",
	});
}

export default Component;
