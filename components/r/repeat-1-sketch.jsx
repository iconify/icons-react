import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f33kfsb_i.css';
import '../../css/t/t7u-f0bvj.css';
import '../../css/s/skebkz5in.css';
import '../../css/l/lgxikgbwv.css';
import '../../css/g/g8ed_dbcn.css';
import '../../css/e/e1fzs96go.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f33kfsb_i wm-k"/><path class="t7u-f0bvj wm-a"/><path class="skebkz5in wm-s"/><path class="lgxikgbwv wm-k"/><path class="g8ed_dbcn wm-a"/><path class="e1fzs96go wm-s"/></g>`,
		"fallback": "withicons:repeat-1-sketch",
	});
}

export default Component;
