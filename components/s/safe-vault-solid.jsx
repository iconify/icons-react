import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz7g64bgw.css';
import '../../css/u/uyvw0_bju.css';
import '../../css/i/idda6mbqk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz7g64bgw"/><path clip-rule="evenodd" class="uyvw0_bju"/><path clip-rule="evenodd" class="idda6mbqk"/>`,
		"fallback": "streamline-plump:safe-vault-solid",
	});
}

export default Component;
