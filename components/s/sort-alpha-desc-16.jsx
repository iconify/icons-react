import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwzhq8ujm.css';
import '../../css/m/mdm2icu2v.css';
import '../../css/o/oc6ekbbrh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwzhq8ujm"/><path clip-rule="evenodd" class="mdm2icu2v"/><path class="oc6ekbbrh"/>`,
		"fallback": "qlementine-icons:sort-alpha-desc-16",
	});
}

export default Component;
