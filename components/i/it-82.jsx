import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/h/h5yub43id.css';
import '../../css/w/w87otfbzz.css';
import '../../css/m/mjhx_yb_c.css';
import '../../css/q/q0jwtubjs.css';
import '../../css/m/ms03406ge.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="h5yub43id"/><path class="w87otfbzz"/><path class="mjhx_yb_c"/><path class="q0jwtubjs"/><path class="ms03406ge"/></g>`,
		"fallback": "circle-flags:it-82",
	});
}

export default Component;
