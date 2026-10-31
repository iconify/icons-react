import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udb9p5vlu.css';
import '../../css/k/kgtwb3bur.css';
import '../../css/u/uaerz-6iu.css';
import '../../css/l/llgknward.css';
import '../../css/k/kpjxkmbzd.css';
import '../../css/h/hr-javzdk.css';
import '../../css/z/zz_zghb1i.css';
import '../../css/y/yzokykbeq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udb9p5vlu"/><path class="kgtwb3bur"/><path class="uaerz-6iu"/><path class="llgknward"/><path class="kpjxkmbzd"/><path class="hr-javzdk"/><path class="zz_zghb1i"/><path class="yzokykbeq"/>`,
		"fallback": "iconito:pasta",
	});
}

export default Component;
