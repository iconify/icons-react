import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/d/d2awzab-j.css';
import '../../css/h/hbv9io_5q.css';
import '../../css/b/bw5olrd0u.css';
import '../../css/y/yqjvl1bsm.css';
import '../../css/i/i2oq35fdo.css';
import '../../css/j/jl0qw6bwe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="d2awzab-j"/><path class="hbv9io_5q"/><path class="bw5olrd0u"/><path class="yqjvl1bsm"/><path class="i2oq35fdo"/><path class="jl0qw6bwe"/></g>`,
		"fallback": "icon-park:medical-mark",
	});
}

export default Component;
