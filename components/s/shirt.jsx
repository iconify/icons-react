import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxoxozypq.css';
import '../../css/w/whdb1h-fa.css';
import '../../css/t/tcq7eybbj.css';
import '../../css/z/zzeg5qbgp.css';
import '../../css/z/zd5s40n_h.css';
import '../../css/p/pg9i02rft.css';
import '../../css/r/r28hqgbbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxoxozypq wm-shadow"/><path class="whdb1h-fa"/><path class="tcq7eybbj"/><path class="zzeg5qbgp"/><path class="zd5s40n_h"/><path class="pg9i02rft wm-shine"/><path class="r28hqgbbu"/>`,
		"fallback": "withicons-plush:shirt",
	});
}

export default Component;
