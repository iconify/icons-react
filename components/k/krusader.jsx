import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svcyc9bmt.css';
import '../../css/k/k033u8bmd.css';
import '../../css/r/r7gqo5bsc.css';
import '../../css/a/apa-nuboc.css';
import '../../css/t/t2ol4rbbp.css';
import '../../css/g/gjzzc-b5h.css';
import '../../css/o/on2awrzxs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svcyc9bmt"/><path class="k033u8bmd"/><path class="r7gqo5bsc"/><path class="apa-nuboc"/><path class="t2ol4rbbp"/><path class="gjzzc-b5h"/><path class="on2awrzxs"/>`,
		"fallback": "selfhst:krusader",
	});
}

export default Component;
