import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/u/uwawlnb2m.css';
import '../../css/m/mgei9ac2l.css';
import '../../css/j/jkzqwrbvb.css';
import '../../css/h/hnb4rpb4g.css';
import '../../css/k/kv3xb3zql.css';
import '../../css/w/wluw6wbrz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="uwawlnb2m"/><path class="mgei9ac2l"/><path class="jkzqwrbvb"/><path class="hnb4rpb4g"/><path class="kv3xb3zql"/><path class="wluw6wbrz"/></g>`,
		"fallback": "icon-park:stretching",
	});
}

export default Component;
