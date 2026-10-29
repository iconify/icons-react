import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e6ropcc-d.css';
import '../../css/v/vak-z7b5k.css';
import '../../css/o/ogmfbuu8l.css';
import '../../css/j/jmkhylajy.css';
import '../../css/t/tfiky1b5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="e6ropcc-d wm-deco"/><path class="vak-z7b5k wm-deco"/><path class="ogmfbuu8l wm-k"/><path class="jmkhylajy wm-a"/><path class="tfiky1b5f wm-k"/></g>`,
		"fallback": "withicons:text-cursor-blueprint",
	});
}

export default Component;
