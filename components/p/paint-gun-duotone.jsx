import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzuew1bbt.css';
import '../../css/i/i6u_vsbbj.css';
import '../../css/t/thhkosbnf.css';
import '../../css/l/lrv63vbhk.css';
import '../../css/h/hz-aqpu0t.css';
import '../../css/d/dezlgd06k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bzuew1bbt"/><path class="i6u_vsbbj"/><path class="thhkosbnf"/><path class="lrv63vbhk"/><path class="hz-aqpu0t"/><path class="dezlgd06k"/></g>`,
		"fallback": "lucide-extended:paint-gun-duotone",
	});
}

export default Component;
