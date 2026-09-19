import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vulxtnpzy.css';
import '../../css/d/dd6c-mb8w.css';
import '../../css/t/tzalp-b_a.css';
import '../../css/z/z1yhh2-zw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vulxtnpzy"/><path class="dd6c-mb8w"/><path class="tzalp-b_a"/><path class="z1yhh2-zw"/>`,
		"fallback": "file-icons:pike",
	});
}

export default Component;
