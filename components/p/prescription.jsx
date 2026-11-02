import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/qja354uqy.css';
import '../../css/c/cs_zrlb6r.css';
import '../../css/x/xnztegt0q.css';
import '../../css/c/c7h_qcbby.css';
import '../../css/x/xiuzu5cqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="qja354uqy"/><path class="cs_zrlb6r"/><path class="xnztegt0q"/><path class="c7h_qcbby"/><path class="xiuzu5cqr"/></g>`,
		"fallback": "matita:prescription",
	});
}

export default Component;
