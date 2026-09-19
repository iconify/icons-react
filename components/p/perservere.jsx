import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/x/xl3t-ybtt.css';
import '../../css/r/ruq6fdcqh.css';
import '../../css/k/kqukjo5og.css';
import '../../css/z/zzyujsb_o.css';
import '../../css/t/t_4v9v8ks.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="xl3t-ybtt"/><path class="ruq6fdcqh"/><path class="kqukjo5og"/><path class="zzyujsb_o"/><path class="t_4v9v8ks"/>`,
		"fallback": "fxemoji:perservere",
	});
}

export default Component;
