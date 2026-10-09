import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzm-m8l7i.css';
import '../../css/u/u-hzwbc2y.css';
import '../../css/a/aiwlnno1v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzm-m8l7i"/><path class="u-hzwbc2y"/><path class="aiwlnno1v"/>`,
		"fallback": "energy-icons:smart-lock-20",
	});
}

export default Component;
