import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b2b3vubia.css';
import '../../css/t/tfnc91bfv.css';
import '../../css/n/nn2f9gisi.css';
import '../../css/d/dk-3u6b9m.css';
import '../../css/v/vvpcfyjlf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b2b3vubia"/><path class="tfnc91bfv wm-shadow"/><path class="nn2f9gisi"/><path class="dk-3u6b9m"/><path class="vvpcfyjlf"/></g>`,
		"fallback": "withicons:spider-engrave",
	});
}

export default Component;
