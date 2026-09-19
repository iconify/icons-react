import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veq_qkvet.css';
import '../../css/i/i207xkr6i.css';
import '../../css/x/xf--gdc6m.css';
import '../../css/t/tfq-59bdo.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veq_qkvet"/><path class="i207xkr6i"/><path class="xf--gdc6m"/><path class="tfq-59bdo"/>`,
		"fallback": "ant-design:tags-twotone",
	});
}

export default Component;
