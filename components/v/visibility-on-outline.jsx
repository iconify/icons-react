import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9d687bfw.css';
import '../../css/z/zrxq4hpuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x9d687bfw"/><path clip-rule="evenodd" class="zrxq4hpuy"/>`,
		"fallback": "cuida:visibility-on-outline",
	});
}

export default Component;
