import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/iylh-sbak.css';
import '../../css/o/ocb1r0bmr.css';
import '../../css/q/qupbt5bgs.css';
import '../../css/s/sbcc1dhrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path clip-rule="evenodd" class="iylh-sbak"/><path class="ocb1r0bmr"/><path class="qupbt5bgs"/><path class="sbcc1dhrw"/></g>`,
		"fallback": "streamline-sharp-color:label-folder-tag",
	});
}

export default Component;
