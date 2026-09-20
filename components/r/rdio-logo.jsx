import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gytqn9b4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gytqn9b4n"/>`,
		"fallback": "streamline-logos:rdio-logo",
	});
}

export default Component;
