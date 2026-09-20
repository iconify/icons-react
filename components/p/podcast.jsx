import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r-gsambcb.css';
import '../../css/q/qnn9vyb6a.css';
import '../../css/a/aej6_67ns.css';
import '../../css/c/c7gfsbb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r-gsambcb"/><path class="qnn9vyb6a"/><path class="aej6_67ns"/><circle class="c7gfsbb7m"/></g>`,
		"fallback": "lucide:podcast",
	});
}

export default Component;
