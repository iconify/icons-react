import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5py7xbsd.css';
import '../../css/w/wd2bk8qje.css';
import '../../css/e/ey4nidbgq.css';
import '../../css/x/x3sba3w-q.css';
import '../../css/p/pquylo05r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5py7xbsd"/><path class="wd2bk8qje"/><path class="ey4nidbgq"/><path class="x3sba3w-q"/><path class="pquylo05r"/>`,
		"fallback": "selfhst:scatola-magica-light",
	});
}

export default Component;
