import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzec-gbac.css';
import '../../css/f/ff2dlhbix.css';
import '../../css/a/a7--3wfxj.css';
import '../../css/a/at489ww4h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzec-gbac"/><path class="ff2dlhbix"/><path class="a7--3wfxj"/><path class="at489ww4h"/>`,
		"fallback": "selfhst:proxmox-helper-scripts",
	});
}

export default Component;
