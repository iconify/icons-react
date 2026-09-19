import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/ybve_bb-r.css';
import '../../css/p/pd3_r0b4h.css';
import '../../css/z/zdoh6ubhg.css';
import '../../css/o/ok9s4-bxw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrNUBKc2i"><g class="rohhhzb0l"><path clip-rule="evenodd" class="ybve_bb-r"/><path class="pd3_r0b4h"/><path class="zdoh6ubhg"/><path class="ok9s4-bxw"/></g></mask></defs><path mask="url(#SVGrNUBKc2i)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pesticide",
	});
}

export default Component;
