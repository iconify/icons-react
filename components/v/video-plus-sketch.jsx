import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y30alon_g.css';
import '../../css/j/jqzjx1bad.css';
import '../../css/d/ddbht_nzy.css';
import '../../css/c/ci1x8lffu.css';
import '../../css/o/oe5tpmbju.css';
import '../../css/q/qt963y8fa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="y30alon_g"/><path class="jqzjx1bad wm-a"/><path class="ddbht_nzy wm-s"/><path class="ci1x8lffu wm-k"/><path class="oe5tpmbju wm-a"/><path class="qt963y8fa wm-s"/></g>`,
		"fallback": "withicons:video-plus-sketch",
	});
}

export default Component;
