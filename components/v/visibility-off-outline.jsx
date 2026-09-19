import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb-4zccna.css';
import '../../css/y/ypq-gib4v.css';
import '../../css/s/s29qprbza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nb-4zccna"/><path clip-rule="evenodd" class="ypq-gib4v"/><path clip-rule="evenodd" class="s29qprbza"/>`,
		"fallback": "cuida:visibility-off-outline",
	});
}

export default Component;
