import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/byr5dkqie.css';
import '../../css/b/bbpve-yut.css';
import '../../css/s/s_ng-gbav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="byr5dkqie"/><circle class="bbpve-yut"/><path class="s_ng-gbav"/></g>`,
		"fallback": "hugeicons:user-block-01",
	});
}

export default Component;
