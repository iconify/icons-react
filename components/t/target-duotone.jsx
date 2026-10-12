import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sm_15jmlx.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/l/laogv4bch.css';
import '../../css/n/nzmariesu.css';
import '../../css/n/nbqssjb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sm_15jmlx"/><path class="g4vvtk_cw"/><path class="laogv4bch"/><path class="nzmariesu"/><path class="nbqssjb9c"/></g>`,
		"fallback": "lucide-extended:target-duotone",
	});
}

export default Component;
