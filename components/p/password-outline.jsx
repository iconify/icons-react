import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/caw1b0bno.css';
import '../../css/f/fiugtjbdq.css';
import '../../css/h/hvf_gzblv.css';
import '../../css/h/hc3npei1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="caw1b0bno"/><path class="fiugtjbdq"/><path class="hvf_gzblv"/><path clip-rule="evenodd" class="hc3npei1j"/>`,
		"fallback": "solar:password-outline",
	});
}

export default Component;
