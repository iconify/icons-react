import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/en76r3buf.css';
import '../../css/m/mh9t29bel.css';
import '../../css/k/klancfb5i.css';
import '../../css/t/t79-0v05c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRHYZ4dmR"><g class="ft5dv1b6b"><path class="en76r3buf"/><path class="mh9t29bel"/><path class="klancfb5i"/><path class="t79-0v05c"/></g></mask></defs><path mask="url(#SVGRHYZ4dmR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:projector-three",
	});
}

export default Component;
