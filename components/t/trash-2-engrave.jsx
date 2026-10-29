import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pyn9gac2v.css';
import '../../css/l/lz-cf419k.css';
import '../../css/b/b4pwiil8l.css';
import '../../css/a/araeuyb9p.css';
import '../../css/w/wuxib33uk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pyn9gac2v wm-k"/><path class="lz-cf419k wm-a"/><path class="b4pwiil8l wm-shadow"/><path class="araeuyb9p wm-k"/><path class="wm-a wuxib33uk"/></g>`,
		"fallback": "withicons:trash-2-engrave",
	});
}

export default Component;
