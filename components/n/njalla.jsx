import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlvmpt37w.css';
import '../../css/m/matknhssk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlvmpt37w"/><path class="matknhssk"/>`,
		"fallback": "selfhst:njalla",
	});
}

export default Component;
