import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l62nsnq9g.css';
import '../../css/g/ges9eguks.css';
import '../../css/i/iqybl_nmp.css';
import '../../css/l/lmumyibss.css';
import '../../css/k/kiq34vxjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l62nsnq9g"/><circle class="ges9eguks"/><circle class="iqybl_nmp"/><circle class="lmumyibss"/><path class="kiq34vxjl"/></g>`,
		"fallback": "evicons:plug-gbt-dc",
	});
}

export default Component;
