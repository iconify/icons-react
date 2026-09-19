import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vcvuz55ep.css';
import '../../css/j/jh9t2i2nr.css';
import '../../css/a/aum__2m_b.css';
import '../../css/v/vt0zkvbct.css';
import '../../css/o/o_pbzeu9w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="vcvuz55ep"/><path class="jh9t2i2nr"/><path class="aum__2m_b"/><path class="vt0zkvbct"/><path class="o_pbzeu9w"/></g>`,
		"fallback": "icon-park:signal-tower",
	});
}

export default Component;
