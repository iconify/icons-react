import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/z/znz9u0yza.css';
import '../../css/q/ql-rjq2yk.css';
import '../../css/z/zohk_jbtu.css';
import '../../css/i/iri9qh9-t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="znz9u0yza"/><path class="ql-rjq2yk"/><path class="zohk_jbtu"/><path class="iri9qh9-t"/></g>`,
		"fallback": "icon-park:pound-sign",
	});
}

export default Component;
