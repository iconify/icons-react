import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pbh_yt8nh.css';
import '../../css/k/k--7vqzux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pbh_yt8nh"/><path class="k--7vqzux"/></g>`,
		"fallback": "tabler:school-pin",
	});
}

export default Component;
