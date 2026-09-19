import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d37te6b5h.css';
import '../../css/d/dqwa2ibxn.css';
import '../../css/u/ucc_ldd2k.css';
import '../../css/m/my_9i2cvw.css';
import '../../css/e/elu1rcc7b.css';
import '../../css/o/o49n2hb2n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d37te6b5h"/><path class="dqwa2ibxn"/><path class="ucc_ldd2k"/><path class="my_9i2cvw"/><path class="elu1rcc7b"/><path class="o49n2hb2n"/></g>`,
		"fallback": "fluent-emoji-flat:postal-horn",
	});
}

export default Component;
