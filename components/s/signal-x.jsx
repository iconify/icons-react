import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zsh91gblt.css';
import '../../css/a/avs12ccis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zsh91gblt"/><path class="avs12ccis"/></g>`,
		"fallback": "andrsrxn:signal-x",
	});
}

export default Component;
