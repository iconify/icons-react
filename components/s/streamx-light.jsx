import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgu1fkbbl.css';
import '../../css/k/k2un3-b6v.css';
import '../../css/c/cly6unwwo.css';
import '../../css/n/nd2sdrbon.css';
import '../../css/i/ierrqhb0t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgu1fkbbl"/><path class="k2un3-b6v"/><path class="cly6unwwo"/><path class="nd2sdrbon"/><path class="ierrqhb0t"/>`,
		"fallback": "selfhst:streamx-light",
	});
}

export default Component;
