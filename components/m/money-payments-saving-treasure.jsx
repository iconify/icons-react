import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm40es_yd.css';
import '../../css/l/ljwietbxp.css';
import '../../css/e/ecbf7mdmt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm40es_yd"/><path class="ljwietbxp"/><path class="ecbf7mdmt"/>`,
		"fallback": "streamline-pixel:money-payments-saving-treasure",
	});
}

export default Component;
