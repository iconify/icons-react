import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1sqqcc6o.css';
import '../../css/i/iwwx5ob6h.css';
import '../../css/c/c3vcymbtp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1sqqcc6o"/><path class="iwwx5ob6h"/><path class="c3vcymbtp"/>`,
		"fallback": "selfhst:ksuite-kpaste-light",
	});
}

export default Component;
