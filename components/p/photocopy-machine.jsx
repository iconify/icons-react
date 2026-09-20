import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spc03-04k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spc03-04k"/>`,
		"fallback": "streamline-cyber:photocopy-machine",
	});
}

export default Component;
