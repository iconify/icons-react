import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/b/b9fa5tbdj.css';
import '../../css/u/uh2amklte.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="b9fa5tbdj"/><path class="uh2amklte"/></g>`,
		"fallback": "streamline-plump:music-note-trebble-clef",
	});
}

export default Component;
