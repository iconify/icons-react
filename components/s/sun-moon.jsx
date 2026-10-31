import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/olq6oubjb.css';
import '../../css/g/gwcln_b5z.css';
import '../../css/w/w7h20mb6q.css';
import '../../css/q/q08n-4bjs.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="olq6oubjb"/><path class="gwcln_b5z wm-shine"/><path class="w7h20mb6q wm-k"/><path class="q08n-4bjs wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:sun-moon",
	});
}

export default Component;
