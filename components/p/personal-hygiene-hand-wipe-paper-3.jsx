import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s3b_f7b5a.css';
import '../../css/x/xwz29bvle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s3b_f7b5a"/><path class="xwz29bvle"/></g>`,
		"fallback": "covid:personal-hygiene-hand-wipe-paper-3",
	});
}

export default Component;
