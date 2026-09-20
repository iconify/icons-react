import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo282mbbg.css';
import '../../css/t/tj13mnmfk.css';
import '../../css/v/v8bzv4b3x.css';
import '../../css/y/yry9ecckx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo282mbbg"/><path clip-rule="evenodd" class="tj13mnmfk"/><path class="v8bzv4b3x"/><path clip-rule="evenodd" class="yry9ecckx"/>`,
		"fallback": "token:undead",
	});
}

export default Component;
