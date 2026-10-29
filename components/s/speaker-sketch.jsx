import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mcovfn7ky.css';
import '../../css/z/z1rrn3z9c.css';
import '../../css/a/absczkmyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mcovfn7ky"/><path class="wm-k z1rrn3z9c"/><path class="absczkmyl wm-a"/></g>`,
		"fallback": "withicons:speaker-sketch",
	});
}

export default Component;
