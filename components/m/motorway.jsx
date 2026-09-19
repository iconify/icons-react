import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aw1xlojpx.css';
import '../../css/s/slrkptp5o.css';
import '../../css/j/j_2r10fbh.css';
import '../../css/n/n03635bgt.css';
import '../../css/f/fe7gadbte.css';
import '../../css/q/qz6jyibmf.css';
import '../../css/z/z9la3bcda.css';
import '../../css/y/y1c5k0y8i.css';
import '../../css/m/mfckebg3g.css';
import '../../css/c/c8bufkb4n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aw1xlojpx"/><path class="slrkptp5o"/><path class="j_2r10fbh"/><path class="n03635bgt"/><path class="fe7gadbte"/><path class="qz6jyibmf"/><path class="z9la3bcda"/><path class="y1c5k0y8i"/><path class="mfckebg3g"/><path class="c8bufkb4n"/></g>`,
		"fallback": "fluent-emoji-flat:motorway",
	});
}

export default Component;
