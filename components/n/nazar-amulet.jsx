import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0hwgcbxx.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e_h_7tb2z.css';
import '../../css/j/jbdfmgb3u.css';
import '../../css/k/kfd2-zmlq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGmrG1BbPS" class="a0hwgcbxx"/></defs><g class="ft5dv1b6b"><path class="e_h_7tb2z"/><use href="#SVGmrG1BbPS"/><use href="#SVGmrG1BbPS"/><path class="jbdfmgb3u"/><path class="kfd2-zmlq"/></g>`,
		"fallback": "fluent-emoji-flat:nazar-amulet",
	});
}

export default Component;
