import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gblmqib0s.css';
import '../../css/p/pdj1domgo.css';
import '../../css/x/x0-diabfh.css';
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
		"content": `<path class="clr-i-solid--badged clr-i-solid-path-1--badged gblmqib0s"/><path class="clr-i-solid--badged clr-i-solid-path-2--badged pdj1domgo"/><path class="clr-i-solid--badged clr-i-solid-path-3--badged x0-diabfh"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:network-globe-solid-badged",
	});
}

export default Component;
