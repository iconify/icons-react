import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xejf2jbsh.css';
import '../../css/w/w7y2rjsln.css';
import '../../css/i/i0sv2zf0k.css';
import '../../css/m/mkbu6bcri.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xejf2jbsh"/><path clip-rule="evenodd" class="w7y2rjsln"/><path class="i0sv2zf0k"/><path clip-rule="evenodd" class="mkbu6bcri"/></g>`,
		"fallback": "glyphs:temperature-cold-outline",
	});
}

export default Component;
