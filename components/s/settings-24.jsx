import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfpnljbdr.css';
import '../../css/r/rmabd8pvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lfpnljbdr"/><path clip-rule="evenodd" class="rmabd8pvs"/>`,
		"fallback": "qlementine-icons:settings-24",
	});
}

export default Component;
