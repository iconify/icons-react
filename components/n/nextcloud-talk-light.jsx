import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkekv2bib.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkekv2bib"/>`,
		"fallback": "selfhst:nextcloud-talk-light",
	});
}

export default Component;
