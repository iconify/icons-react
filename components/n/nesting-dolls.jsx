import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7ff75vgj.css';
import '../../css/n/nf6trzb_f.css';
import '../../css/q/q62gaqbxq.css';
import '../../css/m/mvxi60b3r.css';
import '../../css/h/h9kedex4w.css';
import '../../css/s/s1v0t4bir.css';
import '../../css/w/w481hfuha.css';
import '../../css/d/d9nwabczy.css';
import '../../css/w/ws4iorbcs.css';
import '../../css/j/jkrsxpbwo.css';
import '../../css/s/sexv9tbnw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7ff75vgj"/><path class="nf6trzb_f"/><circle class="q62gaqbxq"/><path class="mvxi60b3r"/><path class="h9kedex4w"/><path class="s1v0t4bir"/><path class="w481hfuha"/><circle class="d9nwabczy"/><path class="ws4iorbcs"/><circle class="jkrsxpbwo"/><circle class="sexv9tbnw"/>`,
		"fallback": "openmoji:nesting-dolls",
	});
}

export default Component;
