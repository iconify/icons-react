import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4_adlm8w.css';
import '../../css/v/vo71evf5d.css';
import '../../css/c/ca_ybuj8s.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4_adlm8w"/><path class="vo71evf5d"/><path class="ca_ybuj8s"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:orthodox-cross",
	});
}

export default Component;
