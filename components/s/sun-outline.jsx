import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3m690lxe.css';
import '../../css/k/k5sw8vduq.css';
import '../../css/z/z7kdjtbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3m690lxe"/><path clip-rule="evenodd" class="k5sw8vduq"/><path class="z7kdjtbjl"/>`,
		"fallback": "basil:sun-outline",
	});
}

export default Component;
