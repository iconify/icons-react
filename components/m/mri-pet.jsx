import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjvh8st1n.css';
import '../../css/x/xmtno77zy.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjvh8st1n"/><path class="xmtno77zy"/>`,
		"fallback": "medical-icon:mri-pet",
	});
}

export default Component;
