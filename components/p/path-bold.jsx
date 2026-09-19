import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ub2coxuon.css';
import '../../css/s/sisnjrobj.css';
import '../../css/a/auq61abfx.css';
import '../../css/w/w592iwlnf.css';
import '../../css/q/qgovcdcyb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ub2coxuon"/><path clip-rule="evenodd" class="sisnjrobj"/><path class="auq61abfx"/><path clip-rule="evenodd" class="w592iwlnf"/><path class="qgovcdcyb"/></g>`,
		"fallback": "glyphs:path-bold",
	});
}

export default Component;
