import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmu1bacfi.css';
import '../../css/j/j8oiwjbra.css';
import '../../css/h/hgl9jib8r.css';
import '../../css/v/vs80xnbke.css';
import '../../css/k/k_uicfb8g.css';
import '../../css/a/a_v7u2bqc.css';
import '../../css/x/xd2f8cczg.css';
import '../../css/o/o0le4ucyd.css';
import '../../css/t/tfwdf1rhn.css';
import '../../css/n/nw2oo5bhr.css';
import '../../css/t/t3-7vd5kv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmu1bacfi"/><g class="j8oiwjbra"><circle class="hgl9jib8r"/><circle class="vs80xnbke"/></g><path class="k_uicfb8g"/><path class="a_v7u2bqc"/><g class="xd2f8cczg"><circle class="o0le4ucyd"/><circle class="tfwdf1rhn"/></g><path class="nw2oo5bhr"/><path class="t3-7vd5kv"/>`,
		"fallback": "flat-color-icons:manager",
	});
}

export default Component;
