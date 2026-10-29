import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsi-fwbsz.css';
import '../../css/n/n90ye8oqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsi-fwbsz wm-k"/><path class="n90ye8oqo wm-a"/>`,
		"fallback": "withicons-bauhaus:superscript",
	});
}

export default Component;
