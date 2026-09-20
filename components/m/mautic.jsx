import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh9fonbif.css';
import '../../css/i/iqb1nzp3i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh9fonbif"/><path class="iqb1nzp3i"/>`,
		"fallback": "selfhst:mautic",
	});
}

export default Component;
