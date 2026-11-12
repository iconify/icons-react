import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb67ukblf.css';
import '../../css/i/iclst2bgx.css';
import '../../css/d/dtug5xo5w.css';
import '../../css/v/vkhq0_bzh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb67ukblf"/><path class="iclst2bgx"/><path class="dtug5xo5w"/><path class="vkhq0_bzh"/>`,
		"fallback": "selfhst:ksuite-kmeet",
	});
}

export default Component;
