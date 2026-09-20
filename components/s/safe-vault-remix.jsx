import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlc32acft.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dlc32acft"/>`,
		"fallback": "streamline-plump:safe-vault-remix",
	});
}

export default Component;
