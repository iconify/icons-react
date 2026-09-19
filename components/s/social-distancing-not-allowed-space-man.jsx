import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my_fqn8gl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my_fqn8gl"/>`,
		"fallback": "covid:social-distancing-not-allowed-space-man",
	});
}

export default Component;
