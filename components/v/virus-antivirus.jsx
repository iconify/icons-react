import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqax-6b-d.css';
import '../../css/p/pl_8ukb7k.css';
import '../../css/o/oh466gozg.css';
import '../../css/n/n8ly77pzn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jqax-6b-d"><path class="pl_8ukb7k"/><path class="oh466gozg"/><path class="n8ly77pzn"/></g>`,
		"fallback": "streamline-plump:virus-antivirus",
	});
}

export default Component;
