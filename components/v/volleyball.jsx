import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpm6fm9qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpm6fm9qw"/>`,
		"fallback": "proicons:volleyball",
	});
}

export default Component;
