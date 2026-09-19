import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcngdml6y.css';
import '../../css/v/v-zyn29io.css';
import '../../css/j/jt4flvwbj.css';
import '../../css/b/bn_5kebpl.css';
import '../../css/s/sg_40utxr.css';
import '../../css/g/g90dzbb6i.css';
import '../../css/d/djb9e33jf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcngdml6y"/><path class="v-zyn29io"/><path class="jt4flvwbj"/><path class="bn_5kebpl"/><path class="sg_40utxr"/><path class="g90dzbb6i"/><path class="djb9e33jf"/>`,
		"fallback": "fxemoji:spanishflag",
	});
}

export default Component;
