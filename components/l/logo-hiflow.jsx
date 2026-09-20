import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck-rj9bgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck-rj9bgv"/>`,
		"fallback": "tdesign:logo-hiflow",
	});
}

export default Component;
