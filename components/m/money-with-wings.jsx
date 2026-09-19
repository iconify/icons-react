import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stqveac6i.css';
import '../../css/o/ovqpmu8ku.css';
import '../../css/j/j0tl0nz2w.css';
import '../../css/n/nfv7kqb0l.css';
import '../../css/h/hss7gab6n.css';
import '../../css/c/ct20nw9af.css';
import '../../css/e/eofed9buy.css';
import '../../css/v/vzxtxlbhq.css';
import '../../css/a/ag8i1fbby.css';
import '../../css/f/fwh4qc3xc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="stqveac6i"/><path class="ovqpmu8ku"/><path class="j0tl0nz2w"/><path class="nfv7kqb0l"/><path class="hss7gab6n"/><path class="ct20nw9af"/><path class="eofed9buy"/><path class="vzxtxlbhq"/><path class="ag8i1fbby"/><path class="fwh4qc3xc"/></g>`,
		"fallback": "fluent-emoji-flat:money-with-wings",
	});
}

export default Component;
