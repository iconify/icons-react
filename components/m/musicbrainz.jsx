import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q25dr_b5z.css';
import '../../css/x/xoum1hbfu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q25dr_b5z"/><path class="xoum1hbfu"/>`,
		"fallback": "selfhst:musicbrainz",
	});
}

export default Component;
