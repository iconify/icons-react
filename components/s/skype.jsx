import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e608p4byj.css';
import '../../css/h/hg9qm8bal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e608p4byj"/><path class="hg9qm8bal"/></g>`,
		"fallback": "streamline-sharp:skype",
	});
}

export default Component;
