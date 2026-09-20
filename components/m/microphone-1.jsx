import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/b/bd4ni5bbe.css';
import '../../css/i/ik0namb9h.css';
import '../../css/u/uyhoxbgvi.css';
import '../../css/x/xe7e2acoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="bd4ni5bbe"/><path class="ik0namb9h"/><path class="uyhoxbgvi"/><path class="xe7e2acoq"/></g>`,
		"fallback": "streamline-cyber:microphone-1",
	});
}

export default Component;
