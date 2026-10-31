import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hoj8v6b7h.css';
import '../../css/z/zwp03acls.css';
import '../../css/i/irc-6z45a.css';
import '../../css/p/p3_1izxve.css';
import '../../css/a/auf99mbov.css';
import '../../css/t/tjpr_-bee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hoj8v6b7h wm-shadow"/><path class="zwp03acls"/><path class="irc-6z45a"/><path class="p3_1izxve"/><path class="auf99mbov"/><path class="tjpr_-bee"/></g>`,
		"fallback": "withicons-retro:settings-2",
	});
}

export default Component;
