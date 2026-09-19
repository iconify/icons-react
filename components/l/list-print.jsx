import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/f/feh8oabyd.css';
import '../../css/d/dz1omvb8k.css';
import '../../css/o/oi4odfbaz.css';
import '../../css/s/ssvr-sble.css';
import '../../css/v/vbahp1bvw.css';
import '../../css/f/f-auj7bix.css';
import '../../css/o/o0dq1pbzh.css';
import '../../css/j/jgrsx5bbj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g class="nctb2ac4r"><circle class="feh8oabyd"/><circle class="dz1omvb8k"/><circle class="oi4odfbaz"/><path class="ssvr-sble"/></g><circle class="vbahp1bvw"/><circle class="f-auj7bix"/><circle class="o0dq1pbzh"/><path class="jgrsx5bbj"/></g>`,
		"fallback": "pepicons:list-print",
	});
}

export default Component;
