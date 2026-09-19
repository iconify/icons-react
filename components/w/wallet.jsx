import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/i/i_-8rn_4z.css';
import '../../css/v/v_fpkcbui.css';
import '../../css/k/kcex68bds.css';
import '../../css/o/ofkzbwboa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path clip-rule="evenodd" class="i_-8rn_4z"/><path class="v_fpkcbui"/><path class="kcex68bds"/><path class="ofkzbwboa"/></g>`,
		"fallback": "icon-park:wallet",
	});
}

export default Component;
