import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfac9mbzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfac9mbzu"/>`,
		"fallback": "simple-icons:pandoc",
	});
}

export default Component;
