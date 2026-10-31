import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/usvii4y4a.css';
import '../../css/r/r72fqz6sy.css';
import '../../css/q/q88cf_b0l.css';
import '../../css/d/dtoq0cbyo.css';
import '../../css/v/v0n_ghb9i.css';
import '../../css/v/v7pd--bqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="usvii4y4a wm-k"/><path class="r72fqz6sy wm-k"/><path class="q88cf_b0l wm-k"/><path class="dtoq0cbyo wm-shadow"/><path class="v0n_ghb9i wm-shine"/><path class="v7pd--bqm wm-shine"/></g>`,
		"fallback": "withicons-valentine:washing-machine",
	});
}

export default Component;
