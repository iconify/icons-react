import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjqq2vzds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjqq2vzds"/>`,
		"fallback": "thesvg:react-hook-form",
	});
}

export default Component;
