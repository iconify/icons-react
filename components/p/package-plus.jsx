import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/x/x4ih0qmms.css';
import '../../css/e/eo918_bwg.css';
import '../../css/l/l5b77jb3k.css';
import '../../css/s/sntbgpvdb.css';
import '../../css/s/szzmfoboo.css';
import '../../css/x/xt92fd6te.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="x4ih0qmms"/><path class="eo918_bwg wm-shine"/><path class="l5b77jb3k wm-k"/><path class="sntbgpvdb wm-a"/><path class="szzmfoboo wm-s"/><path class="wm-deco xt92fd6te"/></g>`,
		"fallback": "withicons-kawaii:package-plus",
	});
}

export default Component;
