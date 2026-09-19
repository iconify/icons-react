import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6y9utx6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q6y9utx6n"/>`,
		"fallback": "griddy-icons:public-speaking-filled",
	});
}

export default Component;
