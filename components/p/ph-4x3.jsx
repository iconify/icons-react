import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z748_ebdy.css';
import '../../css/e/e7vpmh2zb.css';
import '../../css/z/zsw4udyjx.css';
import '../../css/z/zvp_pt6pp.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z748_ebdy"/><path class="e7vpmh2zb"/><path class="zsw4udyjx"/><path class="zvp_pt6pp"/>`,
		"fallback": "flag:ph-4x3",
	});
}

export default Component;
