import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/o/o7iybpjze.css';
import '../../css/g/gg8oa7bti.css';
import '../../css/h/hrp4v8boa.css';
import '../../css/r/rp4j_8b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="o7iybpjze"/><path class="gg8oa7bti"/><path class="hrp4v8boa"/><path class="rp4j_8b9v"/></g>`,
		"fallback": "tdesign:screenshot",
	});
}

export default Component;
