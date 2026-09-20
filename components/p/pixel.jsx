import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgavekyxp.css';
import '../../css/b/bop73y1vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgavekyxp"/><path class="bop73y1vi"/>`,
		"fallback": "token:pixel",
	});
}

export default Component;
