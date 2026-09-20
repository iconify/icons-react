import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmd9_ci0l.css';
import '../../css/v/vv1m_xbuq.css';
import '../../css/g/gv-p15bpi.css';
import '../../css/l/lwb5uprkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmd9_ci0l"/><path class="vv1m_xbuq"/><path clip-rule="evenodd" class="gv-p15bpi"/><path class="lwb5uprkg"/>`,
		"fallback": "token:paal",
	});
}

export default Component;
