import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0o9-wlos.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0o9-wlos"/>`,
		"fallback": "devicon-plain:podman-wordmark",
	});
}

export default Component;
