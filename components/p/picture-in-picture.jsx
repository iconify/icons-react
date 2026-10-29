import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vcl6pjzop.css';
import '../../css/b/b47dp2bje.css';
import '../../css/w/wq_2m_daf.css';
import '../../css/w/wbbk1sbxo.css';
import '../../css/n/n1bdwetnr.css';
import '../../css/i/iha7e1bks.css';
import '../../css/c/ccgtf0tzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vcl6pjzop wm-shadow"/><path class="b47dp2bje wm-shadow"/><path class="wq_2m_daf"/><path class="wbbk1sbxo"/><path class="n1bdwetnr"/><path class="iha7e1bks"/><path class="ccgtf0tzb"/></g>`,
		"fallback": "withicons-skeuo:picture-in-picture",
	});
}

export default Component;
