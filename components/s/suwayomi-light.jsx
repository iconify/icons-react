import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahbo5262y.css';
import '../../css/o/ocrhpjbbu.css';
import '../../css/u/uh7pe_bjq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahbo5262y"/><circle class="ocrhpjbbu"/><path class="uh7pe_bjq"/>`,
		"fallback": "selfhst:suwayomi-light",
	});
}

export default Component;
