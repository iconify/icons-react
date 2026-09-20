import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfs826bwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfs826bwt"/>`,
		"fallback": "tabler:palette-filled",
	});
}

export default Component;
