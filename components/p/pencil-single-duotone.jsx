import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvm8evbio.css';
import '../../css/z/z9687bcgq.css';
import '../../css/k/ksdi_7b1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvm8evbio"/><path class="z9687bcgq"/><path clip-rule="evenodd" class="ksdi_7b1x"/>`,
		"fallback": "stash:pencil-single-duotone",
	});
}

export default Component;
