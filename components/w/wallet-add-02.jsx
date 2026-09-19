import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bilr75bpg.css';
import '../../css/u/uug17jbru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bilr75bpg"/><path class="uug17jbru"/></g>`,
		"fallback": "hugeicons:wallet-add-02",
	});
}

export default Component;
