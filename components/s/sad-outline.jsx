import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wemwzxbiv.css';
import '../../css/e/ea-tr6aki.css';
import '../../css/c/cu_iqhliu.css';
import '../../css/w/w84vznkgo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="wemwzxbiv"/><path class="ea-tr6aki"/><circle class="cu_iqhliu"/><circle class="w84vznkgo"/>`,
		"fallback": "famicons:sad-outline",
	});
}

export default Component;
