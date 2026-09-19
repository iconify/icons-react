import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-x0c3bnk.css';
import '../../css/t/t772qacii.css';
import '../../css/q/qy7xu79wv.css';
import '../../css/z/z2bshn2ot.css';
import '../../css/g/g97s9tbqx.css';
import '../../css/e/e8015uj1a.css';
import '../../css/z/zztf2ccag.css';
import '../../css/e/e6ft-q7hr.css';
import '../../css/n/ni1zysb2q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m-x0c3bnk"/><path class="t772qacii"/><path class="qy7xu79wv"/><path class="z2bshn2ot"/><path class="g97s9tbqx"/><path class="e8015uj1a"/><path class="zztf2ccag"/><path class="e6ft-q7hr"/><path class="ni1zysb2q"/></g>`,
		"fallback": "fluent-emoji-flat:man-getting-massage-dark",
	});
}

export default Component;
