import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8_l-ut3t.css';
import '../../css/t/tr97occks.css';
import '../../css/w/wwejqjbiz.css';
import '../../css/q/qfzucz_7n.css';
import '../../css/i/i_tivbljh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="t8_l-ut3t"/><circle class="tr97occks"/><path class="wwejqjbiz"/><circle class="qfzucz_7n"/><circle class="i_tivbljh"/>`,
		"fallback": "selfhst:pulse",
	});
}

export default Component;
