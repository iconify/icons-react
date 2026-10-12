import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq6vezb0v.css';
import '../../css/z/z_t71ccqt.css';
import '../../css/l/ltats8egd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq6vezb0v"/><path clip-rule="evenodd" class="z_t71ccqt"/><path class="ltats8egd"/>`,
		"fallback": "lucide-extended:scan-eye-filled",
	});
}

export default Component;
