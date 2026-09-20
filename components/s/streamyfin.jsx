import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-ptle43l.css';
import '../../css/m/m_sbruuwk.css';
import '../../css/i/ipoqbei5r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-ptle43l"/><path class="m_sbruuwk"/><path class="ipoqbei5r"/>`,
		"fallback": "selfhst:streamyfin",
	});
}

export default Component;
