import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3ckgebfq.css';
import '../../css/x/xda2a_cpg.css';
import '../../css/q/qo15eky2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3ckgebfq"/><path class="xda2a_cpg"/><circle class="qo15eky2l"/>`,
		"fallback": "eos-icons:persistent-volume",
	});
}

export default Component;
