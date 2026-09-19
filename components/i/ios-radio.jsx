import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq4v6_btt.css';
import '../../css/n/ngrlpuxaw.css';
import '../../css/v/vzfwzhbbb.css';
import '../../css/t/t4xgpdb5d.css';
import '../../css/o/o5_0jac3d.css';
import '../../css/q/qh4l7ebfc.css';
import '../../css/p/piu34xb3x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq4v6_btt"/><path class="ngrlpuxaw"/><path class="vzfwzhbbb"/><path class="t4xgpdb5d"/><path class="o5_0jac3d"/><path class="qh4l7ebfc"/><path class="piu34xb3x"/>`,
		"fallback": "ion:ios-radio",
	});
}

export default Component;
