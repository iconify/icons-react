import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/y/yawhug1ht.css';
import '../../css/p/p-jn__uye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="yawhug1ht"/><path class="p-jn__uye"/>`,
		"fallback": "solar:maximize-square-3-bold-duotone",
	});
}

export default Component;
