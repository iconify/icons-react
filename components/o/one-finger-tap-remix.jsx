import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r723k724g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r723k724g"/>`,
		"fallback": "streamline-plump:one-finger-tap-remix",
	});
}

export default Component;
