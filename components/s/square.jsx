import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mun6vbc9f.css';
import '../../css/n/nuczxhi4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mun6vbc9f"/><path class="nuczxhi4d"/>`,
		"fallback": "withicons-bauhaus:square",
	});
}

export default Component;
