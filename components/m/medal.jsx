import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_dghybdq.css';
import '../../css/q/qn2hpcwnx.css';
import '../../css/q/qtfikactp.css';
import '../../css/y/y6y_5dbkb.css';
import '../../css/i/i4p9n7b6i.css';
import '../../css/x/xn4icdbjn.css';
import '../../css/c/c-yhu9d-d.css';

const viewBox = {"width":84,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_dghybdq"/><path class="qn2hpcwnx"/><path class="qtfikactp"/><path class="y6y_5dbkb"/><path class="i4p9n7b6i"/><path class="xn4icdbjn"/><path class="c-yhu9d-d"/>`,
		"fallback": "flat-ui:medal",
	});
}

export default Component;
