import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpu57nboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpu57nboe"/>`,
		"fallback": "octicon:telescope-24",
	});
}

export default Component;
