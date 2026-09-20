import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_chlwb2q.css';
import '../../css/s/shfn86b7f.css';
import '../../css/n/n7a0i1lzr.css';
import '../../css/l/lm6u5ojdi.css';
import '../../css/y/yr4reubxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_chlwb2q"/><path class="shfn86b7f"/><path class="n7a0i1lzr"/><path class="lm6u5ojdi"/><path clip-rule="evenodd" class="yr4reubxa"/>`,
		"fallback": "token:kint",
	});
}

export default Component;
