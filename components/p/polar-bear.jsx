import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/disw4ykph.css';
import '../../css/x/xc5hzkcoo.css';
import '../../css/z/zxa427pes.css';
import '../../css/l/lidazzb-u.css';
import '../../css/d/ds-tjxy7b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="disw4ykph"/><path class="xc5hzkcoo"/><path class="zxa427pes"/><path class="lidazzb-u"/><path class="ds-tjxy7b"/></g>`,
		"fallback": "fluent-emoji-flat:polar-bear",
	});
}

export default Component;
