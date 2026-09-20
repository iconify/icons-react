import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xp2l4acuz.css';
import '../../css/p/pists6bnz.css';
import '../../css/g/gla1ypbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xp2l4acuz"/><path class="pists6bnz"/><path class="gla1ypbjz"/></g>`,
		"fallback": "keyline-icons:sticky-note-off-two-tone",
	});
}

export default Component;
