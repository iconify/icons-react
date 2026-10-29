import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/svafjhqih.css';
import '../../css/b/bm_um1bkw.css';
import '../../css/c/cf9jq98eu.css';
import '../../css/a/ax1-ht12b.css';
import '../../css/i/iuo4asbxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="svafjhqih"/><path class="bm_um1bkw wm-a"/><path class="cf9jq98eu wm-a"/><path class="ax1-ht12b"/><path class="iuo4asbxn wm-a"/></g>`,
		"fallback": "withicons:tennis-duo",
	});
}

export default Component;
