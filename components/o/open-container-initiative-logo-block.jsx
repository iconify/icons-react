import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywec42b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ywec42b-o"/>`,
		"fallback": "streamline-logos:open-container-initiative-logo-block",
	});
}

export default Component;
