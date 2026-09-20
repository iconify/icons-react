import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nafxc-7ts.css';
import '../../css/r/r2ihd9b-z.css';
import '../../css/l/lh145ac-v.css';
import '../../css/f/fqw_bpbjr.css';
import '../../css/z/zstnnxbez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nafxc-7ts"/><path class="r2ihd9b-z"/><path class="lh145ac-v"/><path class="fqw_bpbjr"/><path class="zstnnxbez"/></g>`,
		"fallback": "streamline-ultimate-color:natural-disaster-volcano",
	});
}

export default Component;
