import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxflyccvw.css';
import '../../css/z/zq57ufblh.css';
import '../../css/p/pweb_3ahr.css';
import '../../css/b/b_x9htpdh.css';
import '../../css/z/zdsz67mwk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oxflyccvw"/><path class="zq57ufblh"/><path class="pweb_3ahr"/><path clip-rule="evenodd" class="b_x9htpdh"/><path clip-rule="evenodd" class="zdsz67mwk"/></g>`,
		"fallback": "streamline-kameleon-color:stamp-paper-duo",
	});
}

export default Component;
