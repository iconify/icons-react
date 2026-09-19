import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz-_z_9sv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz-_z_9sv"/>`,
		"fallback": "devicon-plain:microsoftsqlserver-wordmark",
	});
}

export default Component;
