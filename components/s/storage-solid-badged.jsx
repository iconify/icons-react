import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvbx92bci.css';
import '../../css/t/ttjr82jtr.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid--badged clr-i-solid-path-1--badged dvbx92bci"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-2--badged ttjr82jtr"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:storage-solid-badged",
	});
}

export default Component;
