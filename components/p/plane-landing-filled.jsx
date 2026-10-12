import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bykugi_jb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bykugi_jb"/>`,
		"fallback": "lucide-extended:plane-landing-filled",
	});
}

export default Component;
