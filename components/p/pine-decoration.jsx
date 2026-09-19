import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hgq1ffbnd.css';
import '../../css/o/o0y79pbjv.css';
import '../../css/x/xg56dnfkt.css';
import '../../css/v/vb19-4v6d.css';
import '../../css/q/q9p1f_-5i.css';
import '../../css/a/aq_7xto3j.css';
import '../../css/f/fqacuk9rm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hgq1ffbnd"/><path class="o0y79pbjv"/><path class="xg56dnfkt"/><path class="vb19-4v6d"/><path class="q9p1f_-5i"/><path class="aq_7xto3j"/><path class="fqacuk9rm"/></g>`,
		"fallback": "fluent-emoji-flat:pine-decoration",
	});
}

export default Component;
