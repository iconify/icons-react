import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nwfdbi95l.css';
import '../../css/j/jo869vb3q.css';
import '../../css/d/dr4uvr8ld.css';
import '../../css/x/xs45cpbqb.css';
import '../../css/c/coqivht7p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nwfdbi95l"/><path class="jo869vb3q"/><path class="dr4uvr8ld"/><path class="xs45cpbqb"/><path clip-rule="evenodd" class="coqivht7p"/></g>`,
		"fallback": "streamline-plump-color:pen-1-flat",
	});
}

export default Component;
