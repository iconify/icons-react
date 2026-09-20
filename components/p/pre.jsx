import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw77q9osv.css';
import '../../css/o/of9-d-bos.css';
import '../../css/x/xuxccbbil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw77q9osv"/><path class="of9-d-bos"/><path class="xuxccbbil"/>`,
		"fallback": "token:pre",
	});
}

export default Component;
