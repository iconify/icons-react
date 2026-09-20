import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd72m_82q.css';
import '../../css/l/ly3ruhirx.css';
import '../../css/n/nqj3jfxks.css';
import '../../css/v/vvqs67bnh.css';
import '../../css/o/omxe52rmf.css';
import '../../css/y/ycymssbrl.css';
import '../../css/x/xgvf3vs2p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pd72m_82q"/><path class="ly3ruhirx"/><path class="nqj3jfxks"/><path class="vvqs67bnh"/><path class="omxe52rmf"/><path class="ycymssbrl"/><path class="xgvf3vs2p"/></g>`,
		"fallback": "unjs:std-env",
	});
}

export default Component;
