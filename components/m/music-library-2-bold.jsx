import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3_gtob6t.css';
import '../../css/b/bz0qnvbjd.css';
import '../../css/z/zoz5x5bue.css';
import '../../css/i/io_i03bvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3_gtob6t"/><path class="bz0qnvbjd"/><path class="zoz5x5bue"/><path clip-rule="evenodd" class="io_i03bvl"/>`,
		"fallback": "solar:music-library-2-bold",
	});
}

export default Component;
