import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f6346fozd.css';
import '../../css/a/atzm8bc8c.css';
import '../../css/e/embnm_8cc.css';
import '../../css/a/aumnm37ge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f6346fozd"/><path class="atzm8bc8c wm-k"/><path class="embnm_8cc wm-k"/><path class="aumnm37ge wm-a"/></g>`,
		"fallback": "withicons:red-lantern-sketch",
	});
}

export default Component;
