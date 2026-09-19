import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9canfbpr.css';
import '../../css/g/gxw0w0bbb.css';
import '../../css/f/f18t8w0qw.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid--badged clr-i-solid-path-1--badged g9canfbpr"/><path class="clr-i-solid--badged clr-i-solid-path-2--badged gxw0w0bbb"/><path class="clr-i-solid--badged clr-i-solid-path-3--badged f18t8w0qw"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:rack-server-solid-badged",
	});
}

export default Component;
