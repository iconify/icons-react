import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/almky1j9k.css';
import '../../css/d/dbq485b4e.css';
import '../../css/o/ocif-h9bu.css';
import '../../css/s/s_f6m4b-b.css';
import '../../css/j/juu6lxbqs.css';
import '../../css/m/m92479njy.css';
import '../../css/a/adpw83k2j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="almky1j9k"/><path class="dbq485b4e"/><path class="ocif-h9bu"/><path class="s_f6m4b-b"/><path class="juu6lxbqs"/><path class="m92479njy"/><path class="adpw83k2j"/>`,
		"fallback": "streamline-emojis:kissing-face-with-smiling-eyes",
	});
}

export default Component;
