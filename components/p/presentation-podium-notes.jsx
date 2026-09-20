import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/ceg-gk3sq.css';
import '../../css/x/xgp37yvic.css';
import '../../css/b/biir-xbeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ceg-gk3sq"/><path class="xgp37yvic"/><path class="biir-xbeu"/></g>`,
		"fallback": "streamline-freehand:presentation-podium-notes",
	});
}

export default Component;
