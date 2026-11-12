import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg5uvza7z.css';
import '../../css/u/ualo8ccab.css';
import '../../css/w/w38m_pb8z.css';
import '../../css/t/tibt6ac4n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg5uvza7z"/><path class="ualo8ccab"/><path class="w38m_pb8z"/><path class="tibt6ac4n"/>`,
		"fallback": "selfhst:microsoft-defender-2020-light",
	});
}

export default Component;
