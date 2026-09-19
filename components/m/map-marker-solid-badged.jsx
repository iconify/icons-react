import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfcaeac6r.css';
import '../../css/f/ffi2c7jam.css';
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
		"content": `<path class="clr-i-solid--badged clr-i-solid-path-1--badged gfcaeac6r"/><circle class="clr-i-solid--badged clr-i-solid-path-2--badged ffi2c7jam"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-3--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:map-marker-solid-badged",
	});
}

export default Component;
