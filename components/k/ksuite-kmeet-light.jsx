import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc6ttac-i.css';
import '../../css/k/kysr9_zzg.css';
import '../../css/x/x0ucnnbbj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc6ttac-i"/><path class="kysr9_zzg"/><path class="x0ucnnbbj"/>`,
		"fallback": "selfhst:ksuite-kmeet-light",
	});
}

export default Component;
