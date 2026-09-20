import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7wz0pbpw.css';
import '../../css/k/kbeh0tbto.css';
import '../../css/c/cn04bccyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q7wz0pbpw"/><path class="kbeh0tbto"/><path class="cn04bccyn"/>`,
		"fallback": "token:ling",
	});
}

export default Component;
