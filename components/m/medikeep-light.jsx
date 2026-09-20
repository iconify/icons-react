import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nix2b51po.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nix2b51po"/>`,
		"fallback": "selfhst:medikeep-light",
	});
}

export default Component;
