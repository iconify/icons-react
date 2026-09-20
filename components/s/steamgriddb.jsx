import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n396llhtk.css';
import '../../css/t/twsgq7bgj.css';
import '../../css/o/o2zk-nrxv.css';
import '../../css/g/g_n51hb9l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n396llhtk"/><path class="twsgq7bgj"/><path class="o2zk-nrxv"/><path class="g_n51hb9l"/>`,
		"fallback": "selfhst:steamgriddb",
	});
}

export default Component;
