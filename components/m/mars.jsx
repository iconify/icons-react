import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/q_db2ebeg.css';
import '../../css/x/xz_fpv02z.css';
import '../../css/s/shwezlboq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="q_db2ebeg"/><path class="xz_fpv02z"/><path class="shwezlboq"/></g>`,
		"fallback": "circle-flags:mars",
	});
}

export default Component;
