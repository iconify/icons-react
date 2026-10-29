import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xd3-h5bhn.css';
import '../../css/j/jb6dax1-j.css';
import '../../css/f/ff_yt5b1u.css';
import '../../css/p/p3bl42yuf.css';
import '../../css/e/ebsvtkeca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="xd3-h5bhn"/><path class="jb6dax1-j wm-k"/><path class="ff_yt5b1u wm-a"/><path class="p3bl42yuf wm-k"/><path class="ebsvtkeca wm-a"/></g>`,
		"fallback": "withicons:panel-right-close-sketch",
	});
}

export default Component;
