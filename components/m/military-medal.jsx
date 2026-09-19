import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eravc0ckn.css';
import '../../css/e/ezpmgmh6m.css';
import '../../css/g/gxdysm7hd.css';
import '../../css/q/qzhl0pzrn.css';
import '../../css/b/bpqc-te1x.css';
import '../../css/y/y01u_cc9i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eravc0ckn"/><path class="ezpmgmh6m"/><path class="gxdysm7hd"/><path class="qzhl0pzrn"/><path class="bpqc-te1x"/><path class="y01u_cc9i"/></g>`,
		"fallback": "fluent-emoji-flat:military-medal",
	});
}

export default Component;
