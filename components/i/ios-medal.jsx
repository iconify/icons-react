import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxwoj7lmp.css';
import '../../css/b/b-t04kbfb.css';
import '../../css/c/cwibazbej.css';
import '../../css/x/xee-hg_qa.css';
import '../../css/y/yq2ccnbax.css';
import '../../css/t/tmoh_qbet.css';
import '../../css/c/cjisyqb-d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxwoj7lmp"/><path class="b-t04kbfb"/><path class="cwibazbej"/><path class="xee-hg_qa"/><g><circle class="yq2ccnbax"/><path class="tmoh_qbet"/><path class="cjisyqb-d"/></g>`,
		"fallback": "ion:ios-medal",
	});
}

export default Component;
