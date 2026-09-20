import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/useuhii4a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="useuhii4a"/>`,
		"fallback": "ix:restore-backup-filled",
	});
}

export default Component;
