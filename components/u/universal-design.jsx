import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb8k_1dbx.css';
import '../../css/k/k9ywmeb8i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb8k_1dbx"/><circle class="k9ywmeb8i"/>`,
		"fallback": "ooui:universal-design",
	});
}

export default Component;
