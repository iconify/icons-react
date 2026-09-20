import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4w_e6bjj.css';
import '../../css/t/tzotlccxi.css';
import '../../css/r/rdwt7mb_k.css';
import '../../css/g/gw_35q5xw.css';
import '../../css/q/qmkkh_00g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4w_e6bjj"/><path class="tzotlccxi"/><path class="rdwt7mb_k"/><path class="gw_35q5xw"/><path class="qmkkh_00g"/>`,
		"fallback": "selfhst:owlistic",
	});
}

export default Component;
