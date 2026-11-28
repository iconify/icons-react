import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kfg8fgbje.css';
import '../../css/t/t6ixtdb-q.css';
import '../../css/m/m_gtut9ud.css';
import '../../css/v/vn_1gcisw.css';
import '../../css/k/kb16w7ywp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kfg8fgbje"/><path class="t6ixtdb-q"/><path class="m_gtut9ud"/><path class="vn_1gcisw"/><path class="kb16w7ywp"/></g>`,
		"fallback": "iconaut:rocket",
	});
}

export default Component;
