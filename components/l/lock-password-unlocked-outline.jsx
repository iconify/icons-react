import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7aemk5fe.css';
import '../../css/x/x41xvfi0c.css';
import '../../css/y/y97ssxb3n.css';
import '../../css/m/m2h8cktnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7aemk5fe"/><path class="x41xvfi0c"/><path class="y97ssxb3n"/><path clip-rule="evenodd" class="m2h8cktnh"/>`,
		"fallback": "solar:lock-password-unlocked-outline",
	});
}

export default Component;
