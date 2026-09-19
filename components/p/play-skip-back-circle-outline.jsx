import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld5kc0m-n.css';
import '../../css/x/xfs_8ebyg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld5kc0m-n"/><path class="xfs_8ebyg"/>`,
		"fallback": "famicons:play-skip-back-circle-outline",
	});
}

export default Component;
