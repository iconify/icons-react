import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mun6vbc9f.css';
import '../../css/z/z0fhwabjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mun6vbc9f wm-k"/><path class="wm-a z0fhwabjm"/>`,
		"fallback": "withicons-bauhaus:square-minus",
	});
}

export default Component;
