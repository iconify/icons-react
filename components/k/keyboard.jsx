import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/n/nm6zu1b6b.css';
import '../../css/n/nzkp49b1k.css';
import '../../css/a/a_-f_rbjf.css';
import '../../css/n/nl8u9ehql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="nm6zu1b6b"/><path class="nzkp49b1k wm-shine"/><path class="a_-f_rbjf wm-k"/><path class="nl8u9ehql wm-a"/></g>`,
		"fallback": "withicons-kawaii:keyboard",
	});
}

export default Component;
