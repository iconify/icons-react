import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jv6pcjbst.css';
import '../../css/h/hasyk_b4b.css';
import '../../css/s/svp4v9b7u.css';
import '../../css/d/dm2mmib_n.css';
import '../../css/o/occf1nb_r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="jv6pcjbst"/><path class="hasyk_b4b"/><path class="svp4v9b7u"/><path class="dm2mmib_n"/><path class="occf1nb_r"/></g>`,
		"fallback": "icon-park-outline:qiyehao",
	});
}

export default Component;
