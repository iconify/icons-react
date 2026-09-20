import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mij6dpb5b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mij6dpb5b"/>`,
		"fallback": "ix:restore-backup-pc",
	});
}

export default Component;
