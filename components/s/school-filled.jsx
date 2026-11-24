import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0otgbc0o.css';
import '../../css/z/zh6xcri0n.css';
import '../../css/t/tsmhkwu9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0otgbc0o"/><path clip-rule="evenodd" class="zh6xcri0n"/><path class="tsmhkwu9x"/>`,
		"fallback": "lucide-extended:school-filled",
	});
}

export default Component;
