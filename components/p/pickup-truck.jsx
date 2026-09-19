import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjc25wbon.css';
import '../../css/u/uoc0cdb_s.css';
import '../../css/b/bdzeb9y7m.css';
import '../../css/n/nb5xt0b0j.css';
import '../../css/l/lf__u2qmg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wjc25wbon"/><path class="uoc0cdb_s"/><path class="bdzeb9y7m"/><path class="nb5xt0b0j"/><path class="lf__u2qmg"/></g>`,
		"fallback": "fluent-emoji-flat:pickup-truck",
	});
}

export default Component;
