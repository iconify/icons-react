import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d-5qdsb5f.css';
import '../../css/e/edohj0bqm.css';
import '../../css/n/ntu-3wbry.css';
import '../../css/v/vg3gqibcj.css';
import '../../css/c/ck-4ht99s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d-5qdsb5f"/><path class="edohj0bqm wm-a"/><path class="ntu-3wbry"/><path class="vg3gqibcj"/><path class="ck-4ht99s wm-a"/></g>`,
		"fallback": "withicons:timer-reset-duo",
	});
}

export default Component;
