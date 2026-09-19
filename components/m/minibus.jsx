import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ftkvv7bnf.css';
import '../../css/f/feb5_bbpk.css';
import '../../css/n/ndaxmsbun.css';
import '../../css/f/f4g0ubbni.css';
import '../../css/s/s6hbbcb7r.css';
import '../../css/y/yzvi0j1dn.css';
import '../../css/o/obzmtfgpj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ftkvv7bnf"/><path class="feb5_bbpk"/><path class="ndaxmsbun"/><path class="f4g0ubbni"/><path class="s6hbbcb7r"/><path class="yzvi0j1dn"/><path class="obzmtfgpj"/></g>`,
		"fallback": "fluent-emoji-flat:minibus",
	});
}

export default Component;
