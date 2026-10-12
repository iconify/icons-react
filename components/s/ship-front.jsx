import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ls7mndy5c.css';
import '../../css/h/hh7g4t-os.css';
import '../../css/b/bzu86gbjz.css';
import '../../css/k/kj2p9jxqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ls7mndy5c"/><path class="hh7g4t-os"/><path class="bzu86gbjz"/><path class="kj2p9jxqy"/></g>`,
		"fallback": "andrsrxn:ship-front",
	});
}

export default Component;
