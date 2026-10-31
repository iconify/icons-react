import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sxi_gkbqz.css';
import '../../css/c/cbn9znbrm.css';
import '../../css/d/djyq5teks.css';
import '../../css/c/cetitacaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="sxi_gkbqz wm-k"/><path class="cbn9znbrm wm-a"/><path class="djyq5teks wm-s"/><path class="cetitacaf wm-deco"/></g>`,
		"fallback": "withicons-kawaii:repeat-1",
	});
}

export default Component;
