import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-x0c3bnk.css';
import '../../css/q/qhadldbcm.css';
import '../../css/q/qy7xu79wv.css';
import '../../css/p/pu9zsm7ny.css';
import '../../css/r/ret1mcnnb.css';
import '../../css/i/iqbfigbmy.css';
import '../../css/e/e8015uj1a.css';
import '../../css/z/zztf2ccag.css';
import '../../css/n/ni1zysb2q.css';
import '../../css/j/j8boa3vzz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m-x0c3bnk"/><path class="qhadldbcm"/><path class="qy7xu79wv"/><path class="pu9zsm7ny"/><path class="ret1mcnnb"/><path class="iqbfigbmy"/><path class="e8015uj1a"/><path class="zztf2ccag"/><path class="ni1zysb2q"/><path class="j8boa3vzz"/></g>`,
		"fallback": "fluent-emoji-flat:person-getting-massage-dark",
	});
}

export default Component;
