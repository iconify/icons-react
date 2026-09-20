import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/n/nz26t1bjz.css';
import '../../css/b/bb9pv_wal.css';
import '../../css/h/h_tsn8bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="nz26t1bjz"/><path class="bb9pv_wal"/><circle class="h_tsn8bxt"/></g>`,
		"fallback": "lets-icons:money",
	});
}

export default Component;
