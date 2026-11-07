import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sye-2abwi.css';
import '../../css/v/vy68jhl7r.css';
import '../../css/q/q2fevzb2w.css';
import '../../css/f/fbvx_eb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sye-2abwi"/><path class="vy68jhl7r"/><path class="q2fevzb2w"/><path class="fbvx_eb8j"/>`,
		"fallback": "solar:mouse-circle-bold-duotone",
	});
}

export default Component;
