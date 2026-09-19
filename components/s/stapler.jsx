import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/x/x0f6bfnym.css';
import '../../css/t/t65jmltua.css';
import '../../css/s/sru92qe_j.css';
import '../../css/z/zqqsr_h7r.css';
import '../../css/x/x89h4ccdu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="x0f6bfnym"/><path class="t65jmltua"/><path class="sru92qe_j"/><path class="zqqsr_h7r"/><circle class="x89h4ccdu"/></g>`,
		"fallback": "icon-park:stapler",
	});
}

export default Component;
