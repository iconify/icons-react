import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5c8v1bhe.css';
import '../../css/j/jj5f1_b4z.css';
import '../../css/o/opt0tabsq.css';
import '../../css/z/zxdqh913f.css';
import '../../css/z/z5nwjlbmz.css';
import '../../css/g/giott867f.css';
import '../../css/m/mecruobxp.css';
import '../../css/i/itt2ugajt.css';
import '../../css/u/upp9bjatg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5c8v1bhe"/><path class="jj5f1_b4z"/><path class="opt0tabsq"/><path class="zxdqh913f"/><path class="z5nwjlbmz"/><path class="giott867f"/><path class="mecruobxp"/><path class="itt2ugajt"/><path class="upp9bjatg"/>`,
		"fallback": "devicon:mercurial-wordmark",
	});
}

export default Component;
