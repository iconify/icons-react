import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgfs5qbos.css';
import '../../css/s/s69_stbql.css';
import '../../css/c/cezfkdb-r.css';
import '../../css/m/mmbxylbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zgfs5qbos"/><path class="s69_stbql"/><path class="cezfkdb-r"/><path class="mmbxylbjq"/></g>`,
		"fallback": "streamline-ultimate-color:time-clock-circle",
	});
}

export default Component;
