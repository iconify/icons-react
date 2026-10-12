import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0dyn4o9i.css';
import '../../css/y/yzdgss0oz.css';
import '../../css/t/tdoi1abuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0dyn4o9i"/><path class="yzdgss0oz"/><path class="tdoi1abuv"/>`,
		"fallback": "lucide-extended:mails-filled",
	});
}

export default Component;
