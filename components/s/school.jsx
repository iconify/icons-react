import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xwxmfbatx.css';
import '../../css/y/y5_drx-ko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xwxmfbatx"/><path class="y5_drx-ko"/></g>`,
		"fallback": "tabler:school",
	});
}

export default Component;
