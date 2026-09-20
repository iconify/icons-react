import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eibi9p29r.css';
import '../../css/x/xwpmugzol.css';
import '../../css/m/m4e1nbbvn.css';
import '../../css/i/ixqo_wb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eibi9p29r"/><path class="xwpmugzol"/><path class="m4e1nbbvn"/><path class="ixqo_wb7f"/></g>`,
		"fallback": "streamline-ultimate-color:monitor-download",
	});
}

export default Component;
