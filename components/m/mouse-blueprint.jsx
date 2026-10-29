import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gjtghudtp.css';
import '../../css/n/nip8kwy2i.css';
import '../../css/t/tri54cc7d.css';
import '../../css/v/vxbqahbvv.css';
import '../../css/w/w1u5mzbwz.css';
import '../../css/l/ltvexmk4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="gjtghudtp wm-deco"/><path class="nip8kwy2i wm-deco"/><path class="tri54cc7d wm-k"/><path class="vxbqahbvv wm-a"/><path class="w1u5mzbwz wm-a"/><path class="ltvexmk4n wm-a"/></g>`,
		"fallback": "withicons:mouse-blueprint",
	});
}

export default Component;
