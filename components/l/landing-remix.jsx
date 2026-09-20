import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdbrh7xmv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mdbrh7xmv"/>`,
		"fallback": "streamline-plump:landing-remix",
	});
}

export default Component;
