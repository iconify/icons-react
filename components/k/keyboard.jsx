import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6qmrcbfy.css';
import '../../css/j/jbxjn6rui.css';
import '../../css/g/gpy4h0q6i.css';
import '../../css/c/c-31zjmkv.css';
import '../../css/m/mudyijbdi.css';
import '../../css/t/t3q_5gbrb.css';
import '../../css/y/y7spk3bsb.css';
import '../../css/n/nae92aczw.css';
import '../../css/c/c5at1j6fl.css';
import '../../css/g/gwbm2k2sr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="b6qmrcbfy"/><path class="jbxjn6rui"/><circle class="gpy4h0q6i"/><circle class="c-31zjmkv"/><circle class="mudyijbdi"/><circle class="t3q_5gbrb"/><circle class="y7spk3bsb"/><circle class="nae92aczw"/><circle class="c5at1j6fl"/><circle class="gwbm2k2sr"/></g>`,
		"fallback": "proicons:keyboard",
	});
}

export default Component;
