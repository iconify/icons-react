import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mun6vbc9f.css';
import '../../css/g/gs5m2mmri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mun6vbc9f wm-k"/><path class="gs5m2mmri wm-a"/>`,
		"fallback": "withicons-bauhaus:square-x",
	});
}

export default Component;
