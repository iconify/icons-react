import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s_b4-ibdg.css';
import '../../css/l/l1o1jw0fj.css';
import '../../css/f/fs-ghbbgv.css';
import '../../css/j/jeo1kfb-t.css';
import '../../css/c/ccsoahs3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="s_b4-ibdg wm-k"/><path class="l1o1jw0fj wm-a"/><path class="fs-ghbbgv wm-shadow"/><path class="jeo1kfb-t wm-k"/><path class="ccsoahs3k wm-a"/></g>`,
		"fallback": "withicons:superscript-engrave",
	});
}

export default Component;
